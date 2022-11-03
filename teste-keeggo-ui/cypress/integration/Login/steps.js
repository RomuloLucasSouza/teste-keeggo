
When(/^informar email valido "([^"]*)" e senha valida "([^"]*)"$/, (emailValido, senhaValida) => {
    cy.get('#email').type(emailValido)
    cy.get('#passwd').type(senhaValida)
    cy.get('#SubmitLogin > span').click()
});


Then(/^consigo acessar area logada$/, () => {
    cy.get('.navigation_page')
        .invoke('text')
        .should('be.equal', "My account")

});


When(/^informar dados de email invalido "([^"]*)" e senha valida "([^"]*)"$/, (emailInvalido, senhaValida) => {
    cy.get('#email').type(emailInvalido)
    cy.get('#passwd').type(senhaValida)
    cy.get('#SubmitLogin > span').click()
});


Then(/^recebo mensagem de autenticacao invalida$/, () => {
    cy.get('ol > li')
        .invoke('text')
        .should('be.equal', "Authentication failed.")
});


When(/^informar dados de email invalido "([^"]*)" e senha valida "([^"]*)"$/, (emailValido, senhaInvalida) => {
    cy.get('#email').type(emailValido)
    cy.get('#passwd').type(senhaInvalida)
    cy.get('#SubmitLogin > span').click()

});

Then(/^recebo mensagem de autenticacao invalida$/, () => {
    cy.get('ol > li')
        .invoke('text')
        .should('be.equal', "Authentication failed.")
});


When(/^informar dados em branco$/, () => {
    cy.get('#SubmitLogin > span').click()
});


Then(/^recebo mensagem para informar email$/, () => {
    cy.get('ol > li')
        .invoke('text')
        .should('be.equal', "An email address required.")
});


When(/^clicar em Esqueceu sua senha$/, () => {
    cy.get('.lost_password > a').click()

});

When(/^informar email valido "([^"]*)"$/, (emailValido) => {
    cy.get('#email').type(emailValido)
    cy.get('.submit > .btn > span').click()

});


Then(/^recebo confirmacao de email enviado para o email valido informado$/, () => {
    cy.get('.alert')
        .invoke('text')
        .should('be.equal', "A confirmation email has been sent to your address: teste2021@teste.com.br")
});


When(/^informar email invalido "([^"]*)"$/, (emailInvalido) => {
    cy.get('#email').type(emailInvalido)
    cy.get('.submit > .btn > span').click()
});

Then(/^recebo mensagem de email ivalido para recuperacao$/, () => {
    cy.get('ol > li')
        .invoke('text')
        .should('be.equal', "There is no account registered for this email address.")
});



When(/^nao informar dados$/, () => {
    cy.get('.submit > .btn > span').click()
	
});

Then(/^recebo mensagem de informar email$/, () => {
	
});



