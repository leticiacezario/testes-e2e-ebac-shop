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
        cy.get('.product_title').should('contain','Augusta Pullover Jacket')
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.button-variable-item-M').click() //Tive que repetir essa linha do codigo para todos os produtos pq sempre que selecionava a cor, ele desmarcava o tamanho
        
        produtosPage.comprarProduto()

        produtosPage.buscarProdutos ('Ariel Roll Sleeve Sweatshirt')
        cy.get('.product_title').should('contain','Ariel Roll Sleeve Sweatshirt')
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.button-variable-item-S').click() //Tive que repetir essa linha do codigo para todos os produtos pq sempre que selecionava a cor, ele desmarcava o tamanho
        produtosPage.comprarProduto()

        produtosPage.buscarProdutos ('Circe Hooded Ice Fleece')
        cy.get('.product_title').should('contain','Circe Hooded Ice Fleece')
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.button-variable-item-S').click() //Tive que repetir essa linha do codigo para todos os produtos pq sempre que selecionava a cor, ele desmarcava o tamanho
        produtosPage.comprarProduto()

        produtosPage.buscarProdutos ('Aether Gym Pant')
        cy.get('.product_title').should('contain','Aether Gym Pant')
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.button-variable-item-32').click() //Tive que repetir essa linha do codigo para todos os produtos pq sempre que selecionava a cor, ele desmarcava o tamanho
        produtosPage.comprarProduto()

        produtosPage.finalizarCompra()







        
        //cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        //cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });


})
