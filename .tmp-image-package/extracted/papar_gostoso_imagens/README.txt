PAPÁ GOSTOSO — PACOTE DE IMAGENS

O catálogo do site contém 112 receitas.

Este pacote inclui:
- receitas.json — lista completa das 112 receitas encontradas no código do site.
- baixar_imagens.py — baixa automaticamente 1 fotografia real do Wikimedia Commons para cada receita.
- pasta imagens/ — será criada automaticamente.
- creditos_imagens.csv — será criado com autor, fonte e licença de cada foto.

COMO USAR NO WINDOWS
1. Instale Python 3, caso ainda não tenha.
2. Abra o PowerShell nesta pasta.
3. Execute:
   py -m pip install requests pillow
   py baixar_imagens.py

Os arquivos serão salvos em "imagens" usando o nome da receita, por exemplo:
Cuscuz nordestino fofinho.jpg
Feijoada de panela.jpg
Pizza margherita autêntica.jpg

OBSERVAÇÃO IMPORTANTE
As imagens vêm do Wikimedia Commons. Cada imagem pode ter uma licença diferente.
O arquivo creditos_imagens.csv registra a fonte, o autor e a licença para você manter as atribuições necessárias no site.
