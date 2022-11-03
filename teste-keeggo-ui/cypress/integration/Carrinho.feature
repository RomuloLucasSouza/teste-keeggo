Feature: Carrinho
    Como usuario quero adicionar itens no carrinho
    e validar produtos no check-out 


Background: Acessar area de login
Given que esteja na 'baseUrl'

Scenario: Adicionar produtos no carrinho
When adicionar produtos no carrinho
And ir para a pagina de check-out
Then valido produtos adicinados corretamente