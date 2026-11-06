"""Busca vagas remotas de design (Remotive, Himalayas, We Work Remotely) e gera uma lista filtrada.

Uso: python3 tools/vagas/buscar.py [dias]   →  imprime JSON com as vagas dos últimos N dias (padrão 7)

Só usa APIs e feeds públicos. Vagas do Brasil (Gupy, LinkedIn) não entram aqui: a rotina diária
as encontra pela pesquisa na web. Nada é enviado; a candidatura é sempre feita pelo Eduardo.
"""

import html
import json
import re
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime

DIAS = int(sys.argv[1]) if len(sys.argv) > 1 else 7
AGORA = datetime.now(timezone.utc)
UA = {'User-Agent': 'busca-de-vagas-pessoal/1.0'}

# Cargo precisa ter alguma destas palavras...
DESIGN = re.compile(r'design|brand|ux|ui\b|visual|motion|creative|art director|diretor de arte', re.I)
# ...e nenhuma destas
FORA = re.compile(
    r'engineer|developer|desenvolvedor|writer|copy|intern|estágio|estagi|junior|júnior|\bjr\b|instructional|interior|'
    r'fashion|apparel|architect|game|3d artist|sales|recruit|marketing manager|account|localization|'
    r'europe|emea|\bus only|usa only|united states|\buk\b',
    re.I,
)
SENIOR = re.compile(r'senior|sênior|\bsr\b|lead|principal|staff|head|director|diretor', re.I)
FOCO = re.compile(r'brand|visual|product|ux|ui\b|motion|creative|identity|identidade|web', re.I)
# Locais em que dá para trabalhar a partir de Curitiba
LOCAL_OK = re.compile(r'worldwide|anywhere|global|latam|latin|south america|americas|brazil|brasil', re.I)


def get(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode('utf-8', 'replace')


def remotive():
    data = json.loads(get('https://remotive.com/api/remote-jobs?category=design'))
    for j in data['jobs']:
        yield {
            'fonte': 'Remotive',
            'titulo': j['title'],
            'empresa': j['company_name'],
            'local': j.get('candidate_required_location') or '',
            'tipo': j.get('job_type') or '',
            'salario': j.get('salary') or '',
            'data': datetime.fromisoformat(j['publication_date']).replace(tzinfo=timezone.utc),
            'link': j['url'],
        }


def himalayas():
    vistos = set()
    for q in ['designer', 'brand designer', 'product designer', 'ui ux designer', 'motion designer', 'art director']:
        url = 'https://himalayas.app/jobs/api/search?' + urllib.parse.urlencode({'q': q})
        for j in json.loads(get(url)).get('jobs', []):
            if j['guid'] in vistos:
                continue
            vistos.add(j['guid'])
            locais = j.get('locationRestrictions') or []
            # Muitos países: resume para não poluir a planilha
            local = 'Worldwide' if not locais else ('Brazil (entre outros)' if 'Brazil' in locais and len(locais) > 3 else ', '.join(locais))
            sal = ''
            if j.get('minSalary'):
                sal = f"{j.get('currency', '')} {j['minSalary']:,}–{j.get('maxSalary') or ''} /{(j.get('salaryPeriod') or 'year')}"
            yield {
                'fonte': 'Himalayas',
                'titulo': j['title'],
                'empresa': j['companyName'],
                'local': local,
                'tipo': j.get('employmentType') or '',
                'salario': sal,
                'data': datetime.fromtimestamp(j['pubDate'], timezone.utc),
                'link': j['applicationLink'],
            }


def wwr():
    xml = get('https://weworkremotely.com/categories/remote-design-jobs.rss')
    for item in re.findall(r'<item>(.*?)</item>', xml, re.S):
        tag = lambda t: html.unescape((re.search(rf'<{t}>(.*?)</{t}>', item, re.S) or [None, ''])[1]).strip()
        titulo = tag('title')
        empresa, _, cargo = titulo.partition(': ')
        yield {
            'fonte': 'We Work Remotely',
            'titulo': cargo or titulo,
            'empresa': empresa if cargo else '',
            'local': tag('region') or tag('country'),
            'tipo': tag('type'),
            'salario': '',
            'data': parsedate_to_datetime(tag('pubDate')),
            'link': tag('link') or tag('guid'),
        }


def nota(v):
    n = 0
    if SENIOR.search(v['titulo']):
        n += 3
    if FOCO.search(v['titulo']):
        n += 2
    if re.search(r'brazil|brasil|latam|latin|south america', v['local'], re.I):
        n += 2
    return n


def main():
    vagas, erros = [], []
    for fonte in (remotive, himalayas, wwr):
        try:
            vagas.extend(fonte())
        except Exception as e:  # uma fonte fora do ar não derruba as outras
            erros.append(f'{fonte.__name__}: {e}')

    limite = AGORA - timedelta(days=DIAS)
    filtradas, links, chaves = [], set(), set()
    for v in vagas:
        chave = (v['titulo'].strip().lower(), v['empresa'].strip().lower())
        if v['data'] < limite or v['link'] in links or chave in chaves:
            continue
        if not DESIGN.search(v['titulo']) or FORA.search(v['titulo']):
            continue
        if v['local'] and not LOCAL_OK.search(v['local']):
            continue
        links.add(v['link'])
        chaves.add(chave)
        v['nota'] = nota(v)
        v['data'] = v['data'].strftime('%Y-%m-%d')
        filtradas.append(v)

    filtradas.sort(key=lambda v: (v['nota'], v['data']), reverse=True)  # melhor nota, depois mais nova
    print(json.dumps({'gerado_em': AGORA.isoformat(), 'dias': DIAS, 'erros': erros, 'vagas': filtradas}, ensure_ascii=False, indent=1))


if __name__ == '__main__':
    main()
