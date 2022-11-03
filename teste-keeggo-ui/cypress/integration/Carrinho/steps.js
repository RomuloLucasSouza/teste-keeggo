const { assert } = require("chai");

When(/^adicionar produtos no carrinho$/, () => {
    cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
    cy.get('.cross').click()
    cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
    cy.get('.continue > span').click()
    cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
});

When(/^ir para a pagina de check-out$/, () => {
    cy.get('.button-medium > span').click()
});

Then(/^valido produtos adicinados corretamente$/, () => {
    cy.get('#product_1_1_0_0 > .cart_description').should('be.visible')
    cy.get('#product_2_7_0_0 > .cart_description').should('be.visible')
    cy.get('#product_3_13_0_0 > .cart_description').should('be.visible')
});
