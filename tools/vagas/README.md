# Busca de vagas

Rotina diária (dias úteis, de manhã) que procura vagas de design sênior e monta uma planilha
no Google Drive, na pasta **Busca de vagas**, com prioridade, motivo e mensagem de candidatura pronta.

- `buscar.py` — vagas remotas por APIs e feeds públicos (Remotive, Himalayas, We Work Remotely).
- Vagas no Brasil (remoto e Curitiba) vêm da pesquisa na web feita pela rotina.
- Nada é enviado automaticamente: a candidatura é sempre revisada e enviada pelo Eduardo.

Rodar à mão: `python3 tools/vagas/buscar.py 7` (vagas dos últimos 7 dias, em JSON).
