/// <reference types="cypress" />

/* global Then, When, Given */

   
 And('informo um email ja cadastrado na base' , () => {
    cy.get('#email_create').type('visquinhavipal@gmail.com{enter}')
 })

 Then('a aplicacao notifica que o email utilizado ja possui cadastro' , () => {
    cy.get('#create_account_error > ol > li').should('have.text','An account using this email address has already been registered. Please enter a valid password or request a new one. ')

 })

 


