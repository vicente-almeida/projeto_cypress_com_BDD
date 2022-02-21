/// <reference types="cypress" />

/* global Then, When, Given */

And("preenchi os dados de login com usuario valido", () => {
  global.usuario.email = "visquinhavipal@gmail.com";
  global.usuario.nome = "Visco Silva";

  cy.get("#email").type(global.usuario.email);
  cy.get("#passwd").type(`${global.usuario.senha}{enter}`);
});
Then(
  "o sistema realiza meu login com sucesso me autenticando na pagina",
  () => {
    cy.get(".account > span").should("have.text", global.usuario.nome);
    cy.get(".info-account").should(
      "have.text",
      "Welcome to your account. Here you can manage all of your personal information and orders."
    );
  }
);
