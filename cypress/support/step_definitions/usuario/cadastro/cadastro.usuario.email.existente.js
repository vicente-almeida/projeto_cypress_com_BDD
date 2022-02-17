/// <reference types="cypress" />

const Faker = require('faker')

/* global Then, When, Given */

let user = {email: Faker.internet.email(),
    name: {
        first: Faker.name.firstName(),
        last: Faker.name.lastName()
    }}
let password = {pass: Faker.internet.password(),} 
let address_data = {streetAddress: Faker.address.streetAddress(),
         cityAddress: Faker.address.city(),
         stateAddress: Faker.datatype.number({min: 1, max:20}),
         postCodeAddress: Faker.datatype.number({min: 10000, max:99999})}
let phone_mobile = {phone: Faker.phone.phoneNumberFormat(),}   

 Given('Acesso a aplicacao', () => {
     cy.visit('?controller=authentication&back=my-account')
 })

 When('Clico para realizar o cadastro', () => {
     cy.get('.login').click()

 })

 And('Informo meu email para cadastro' , () => {
    cy.get('#email_create').type(`${user.email}{enter}`)
 })

 And('Preencho todos os dados' , () => {
    cy.url().should('include', '#account-creation') //Assert para validar a mudança da url antes de começar a interagir com os elementos
    cy.get('.page-heading').should('be.visible') //Assert para validar se o texto está aparecendo na página
    cy.get('#email').should('have.value', user.email)
    cy.get('#id_gender2').check()
    cy.get('#customer_firstname').type(user.name.first)
    cy.get('#customer_lastname').type(user.name.last)
    cy.get('#passwd').type(password.pass)
    cy.get('#days').select('2')
    cy.get('#months').select('March')
    cy.get('#years').select('2019')
    cy.get('#newsletter').click()
    cy.get('#address1').type(address_data.streetAddress)
    cy.get('#city').type(address_data.cityAddress)
    cy.get('#id_state').select(address_data.stateAddress)
    cy.get('#postcode').type(address_data.postCodeAddress)
    cy.get('#other').type('Testando a aplicação em cypresss')
    cy.get('#phone_mobile').type(phone_mobile.phone)
 })

 And('Finalizo o cadastro' , () => {
    cy.get('#submitAccount > span').click()
    cy.get('.account > span').should('have.text', `${user.name.first} ${user.name.last}`)
    cy.get('.info-account').should('be.visible')
 })

 Then('O sistema realiza meu cadastro com sucesso me autenticando na pagina' , () => {
    cy.get('.account > span').should('have.text', `${user.name.first} ${user.name.last}`)
    cy.get('.info-account').should('be.visible')

 })

 


