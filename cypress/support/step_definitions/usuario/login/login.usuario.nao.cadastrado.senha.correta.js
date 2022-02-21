/// <reference types="cypress" />

/* global Then, When, Given */

And("preenchi os campos de login com um usuario nao cadastrado", () => {
  global.usuario.email = "vulgomugra@gmail.com";

  cy.get("#email").type(global.usuario.email);
  cy.get("#passwd").type(global.usuario.senha);
});
Then("o sistema me notifica que a autenticacao falhou", () => {
  cy.get("div.alert.alert-danger")
    .should("be.visible")
    .find("ol > li")
    .should("have.text", "Authentication failed.");
});
