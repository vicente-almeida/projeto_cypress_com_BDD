/// <reference types="cypress" />

/* global Then, When, Given */

And('informo um email invalido' , () => {
    cy.url().should('include', '?controller=authentication&back=my-account') //Assert para validar a mudança da url antes de começar a interagir com os elementos
    cy.get('.page-heading').should('be.visible') //Assert para validar se o texto está aparecendo na página
    cy.get('#email_create').type('testeemailinvalicom {enter}')
    
    
 })

 Then('a aplicacao notifica que o email utilizado é invalido' , () => {
    cy.get('#create_account_error > ol > li').should('have.text','Invalid email address.') //Outro tipo de assert para validar se o texto está aparecendo na tela
    

 })

 


