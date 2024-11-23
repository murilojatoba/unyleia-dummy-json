# unyleia-dummy-json
[Frontend] Projeto de entrega da unidade 4, pós-graduação Unyleya

O projeto consiste na implementação de uma UI (User Interface) para a API Dummy Json, conforme especificado pela atividade sugeridas pelo professor.

## Origem dos dados
O projeto utiliza a API https://dummyjson.com como fonte de dados para as requisições.

## Requisitos
* O sistema deverá ter pelo menos duas páginas, sendo uma página para a listagem de itens e outra página para detalhar um item selecionado.

Os recursos escolhidos para implementação foram **Users** e **ToDos**.
Para cada um dos recurso foi implementado uma página de pesquisa, onde o usuário poderá filtrar os elementos exibidos no grid.
Atravéz do grid, o usuário poderá clicar no link de exibição dos detalhes, no qual o sistema irá direcioná-lo para a página de detalhes.
Além da consulta, também foi implementado a funcionalidade de inclusão de elementos para cada um dos recursos escolhidos.

* Deverão ser feitas duas requisições, sendo uma para a busca da lista de itens e outra para a busca do detalhe do item.

Tomando como exemplo o recurso **Users**, as requisições da pesquisa utilizam os mecanismos de busca fornecidos pelo endpoint **/users**. Enquanto a requisição da exibição dos detalhes utiliza o endpoint **/users/:id**.