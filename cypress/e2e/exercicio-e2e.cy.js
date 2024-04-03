/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

        beforeEach(() => {
            produtosPage.visitarUrl()
        });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(1) > a').click()
        cy.get('.woocommerce-form > .button').click()
        cy.fixture('perfil').then((dados) => {
        cy.login(dados.usuario, dados.senha)
        })
        
        produtosPage.buscarProdutos('Augusta Pullover Jacket')
        produtosPage.adicionarProduto('Augusta Pullover Jacket')
        produtosPage.comprarProduto()

        produtosPage.buscarProdutos ('Ariel Roll Sleeve Sweatshirt')
        produtosPage.adicionarProduto ('Ariel Roll Sleeve Sweatshirt')
        produtosPage.comprarProduto()

        produtosPage.buscarProdutos ('Circe Hooded Ice Fleece')
        produtosPage.adicionarProduto ('Circe Hooded Ice Fleece')
        produtosPage.comprarProduto()

        produtosPage.buscarProdutos ('Eos V-Neck Hoodie')
        produtosPage.adicionarProduto ('Eos V-Neck Hoodie')
        produtosPage.comprarProduto()

        produtosPage.finalizarCompra()







        
        //cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        //cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });


})
