/// <reference types="cypress" />

/* global Then, When, Given */

And("preenchi o campo email com um usuario invalido", () => {
  global.usuario.email = "visquinhavipal@gmail";

  cy.get("#email").type(global.usuario.email);
});
And("preenchi o campo senha com uma senha correta", () => {
  cy.get("#passwd").type(`${global.usuario.senha}{enter}`);
});
Then("o sistema me notifica que o email e invalido", () => {
  cy.get("div.alert.alert-danger")
    .should("be.visible")
    .find("ol > li")
    .should("have.text", "Invalid email address.");
});
