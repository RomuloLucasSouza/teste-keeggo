Feature: Buscar produto
    Eu como usuario quero acessar a pagina principal 
    e buscar por um produto


Background: Acessar area de login
Given que esteja na 'baseUrl'

Scenario: Procurar item cadastrado
When digitar no campo procurar por produto cadastrado "dress"
Then recebo na tela itens relacionados com a pesquisa "dress"

Scenario: Campo buscar em branco
When deixar o campo procurar em branco
And clicar em botao lupa
Then recebo na tela mensagem de erro

Scenario: Procurar item nao cadastrado
When digitar no campo procurar por produto nao cadastrado "piscina"
And clicar em botao lupa
Then recebo na tela mensagem resultado não encontrado "piscina"