/// <reference types="cypress" />

/* global Then, When, Given */

And("preenchi os campos de login sem informar senha", () => {
  global.usuario.email = "visquinhavipal@gmail.com";

  cy.get("#email").type(global.usuario.email);
});
Then("O sistema me notifica que o campo senha é obrigatorio", () => {
  cy.get("div.alert.alert-danger")
    .should("be.visible")
    .find("ol > li")
    .should("have.text", "Password is required.");
});
