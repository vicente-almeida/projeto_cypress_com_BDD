/// <reference types="cypress" />

/* global Then, When, Given */

And("preenchi os campos de login sem informar email", () => {
  cy.get("#passwd").type(`${global.usuario.senha}{enter}`);
});
Then("o sistema me notifica que o campo email é obrigatorio", () => {
  cy.get("div.alert.alert-danger")
    .should("be.visible")
    .find("ol > li")
    .should("have.text", "An email address required.");
});
