export default class AutenticacaoElements {
  static btnSignin() {
    return cy.get(".login");
  }

  static inputEmailLogin() {
    return cy.get("#email");
  }

  static inputSenha() {
    return cy.get("#passwd");
  }

  static realizarLogin() {
    return cy.get("#SubmitLogin");
  }

  static validaAutenticacaoPagina() {
    return cy.get(".account > span");
  }
  static validaMensagemMyAccount() {
    return cy.get(".info-account");
  }

  static emailUserValido() {
    return cy.get("#email");
  }
  static senhaIncorreta() {
    return cy.get("#passwd");
  }
  static teclaEnter() {
    return cy.get("#passwd");
  }
  static notificaSenhaInv() {
    return cy
      .get("div.alert.alert-danger")
      .should("be.visible")
      .find("ol > li");
  }
}
