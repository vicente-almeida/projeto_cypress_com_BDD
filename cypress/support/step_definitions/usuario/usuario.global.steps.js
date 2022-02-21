/// <reference types="cypress" />

/* global Then, When, Given */

Given("Acesso a aplicacao", () => {
  cy.visit("http://automationpractice.com/index.php");
});

When("clico no botao de signin", () => {
  cy.get(".login").click();
});
And("clico para realizar o login", () => {
  cy.get("#SubmitLogin").click();
});
