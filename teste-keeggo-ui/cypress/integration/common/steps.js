Given(/^que esteja na 'baseUrl'$/, () => {
	cy.visit('/')   
});

When(/^clicar em entrar$/, () => {
	cy.get('.login').click()
});