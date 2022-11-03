Feature: Login

    Eu como usuário quero clicar no botao entrar 
    e informar dados para acessar area logada

Background: Acessar area de login
Given que esteja na 'baseUrl'
And clicar em entrar

Scenario: Efetuar login com sucesso
When informar email valido "teste2021@teste.com.br" e senha valida "teste"
Then consigo acessar area logada

Scenario: Login com email invalido
When informar dados de email invalido "teste12345@teste.com.br" e senha valida "teste"
Then recebo mensagem de autenticacao invalida


Scenario: Login com senha invalida
When informar dados de email invalido "teste2021@teste.com.br" e senha valida "12345"
Then recebo mensagem de autenticacao invalida


Scenario: Login com dados em branco
When informar dados em branco
Then recebo mensagem para informar email


Scenario: Esqueceu senha com email valido
When clicar em Esqueceu sua senha
And informar email valido "teste2021@teste.com.br"
Then recebo confirmacao de email enviado para o email valido informado


Scenario: Esqueceu senha com email invalido
When clicar em Esqueceu sua senha
And informar email invalido "12345teste@teste.com.br"
Then recebo mensagem de email ivalido para recuperacao

Scenario: Esqueceu senha com dados em branco
When clicar em Esqueceu sua senha
And nao informar dados
Then recebo mensagem de informar email