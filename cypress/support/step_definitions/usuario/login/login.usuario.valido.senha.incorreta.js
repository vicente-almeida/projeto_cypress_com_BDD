/// <reference types="cypress" />

/* global Then, When, Given */

And("preenchi o campo email com um usuario valido", () => {
  global.usuario.email = "visquinhavipal@gmail.com";

  cy.get("#email").type(global.usuario.email);
});
And("preenchi o campo senha com uma senha invalida", () => {
  cy.get("#passwd").type("111");
});
And("teclo Enter", () => {
  cy.get("#passwd").type("{enter}");
});

Then("o sistema me notifica que a senha e invalida", () => {
  cy.get("div.alert.alert-danger")
    .should("be.visible")
    .find("ol > li")
    .should("have.text", "Invalid password.");
});
