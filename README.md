# unyleia-dummy-json
[Frontend] Projeto de entrega da unidade 4, pós-graduação Unyleya

Repo: https://github.com/murilojatoba/unyleya-dummy-json
Site: https://unyleya-dummy-json.vercel.app/


O projeto consiste na implementação de uma UI (User Interface) para a API Dummy Json, conforme especificado pela atividade sugerida pelo professor.

## Origem dos dados
O projeto utiliza a API https://dummyjson.com como fonte de dados para as requisições.

## Requisitos
* "*Nesta API, você encontrará algumas rotas para utilização, como rota de Produtos, Posts, Comentários, ToDos etc. Agora, você deverá escolher um desses recursos para implementar em seu sistema.*"
Os recursos escolhidos para implementação foram **Users** e **ToDos**.
Para cada um dos recurso foi implementado uma página de pesquisa, onde o sistema exibe os elementos no grid.
Atravéz do grid, o usuário poderá clicar no link de exibição dos detalhes e o sistema irá direcioná-lo para a página de detalhes.
###

* "*O sistema deverá ter pelo menos duas páginas, sendo uma página para a listagem de itens e outra página para detalhar um item selecionado. 
Deverão ser feitas duas requisições, sendo uma para a busca da lista de itens e outra para a busca do detalhe do item.*":
Tomando como exemplo o recurso **Users**, as requisições da pesquisa utilizam os mecanismos de busca fornecidos pelo endpoint **/users**, enquanto a requisição da exibição dos detalhes utiliza o endpoint **/users/:id**.
Não foi implementada a página de detalhes do recurso ToDo, visto que todos os dados foram exibidos no grid diretamente.

###
Além da consulta, também foi implementado a funcionalidade de inclusão de elementos para cada um dos recursos escolhidos.
Apesar da inclusão ser falsa (fake), ou seja, o dado não é inserido verdadeiramente na base de dados da API, a implementação serviu para ver o funcionamento de uma requisição do tipo POST.

###
* "*Atividade 5: Nesta atividade, você implementará uma funcionalidade extra (qualquer funcionalidade que achar importante) utilizando alguma biblioteca de terceiros.*"
A atividade extra escolhida para implementação foi o filtro de Users e ToDo.
Para cada um dos recurso, o usuário poderá filtrar os elementos exibidos no grid.
A bilbioteca de terceiros escolhida foi a **react-data-table-component**, utilizada para exibir os dados no grid de forma mais bonita e profissional.