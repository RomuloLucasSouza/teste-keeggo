
When(/^digitar no campo procurar por produto cadastrado "([^"]*)"$/, (produtoCadastrado) => {
    cy.get('#search_query_top').type(produtoCadastrado + '{enter}')

});


Then(/^recebo na tela itens relacionados com a pesquisa "([^"]*)"$/, (produtoCadastrado) => {
	cy.get('.lighter')
      .should('contain', produtoCadastrado)
});


When(/^deixar o campo procurar em branco$/, () => {
    return true
});

When(/^clicar em botao lupa$/, () => {
	cy.get('#searchbox > .btn').click()
});

Then(/^recebo na tela mensagem de erro$/, () => {
    cy.get('.alert')
      .invoke('text')
      .should('contain', 'Please enter a search keyword')
			
});


When(/^digitar no campo procurar por produto nao cadastrado "([^"]*)"$/, (produtoNaoCadastrado) => {
	cy.get('#search_query_top').type(produtoNaoCadastrado)
});

When(/^clicar em botao lupa$/, () => {
	cy.get('#searchbox > .btn').click()
});

Then(/^recebo na tela mensagem resultado não encontrado "([^"]*)"$/, (produtoNaoCadastrado) => {
	cy.get('.alert')
      .invoke('text')
      .should('contain', 'No results were found for your search')
});
