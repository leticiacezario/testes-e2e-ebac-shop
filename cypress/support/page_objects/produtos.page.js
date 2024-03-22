class ProdutosPage {

   

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProdutos(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()

    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.product-block').contains (nomeProduto).click()

    }

    comprarProduto() {

        var quantidade = 1
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

    }


    finalizarCompra() {        
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get(':nth-child(4) > .product-thumbnail > a > .attachment-woocommerce_thumbnail').should('exist')
        cy.get('.checkout-button').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        
    }
   
}

export default new ProdutosPage ()