const AutenticacaoElements = require("../elements/autenticacao.elements");

export default class AutenticacaoPage {
  static cliqueBtnLogin() {
    return cy.visit("").then(() => {
      AutenticacaoElements.btnSignin()
        .click()
        .url()
        .should("include", "?controller=authentication&back=my-account");
    });
  }

  static digitaEmailLogin() {
    return AutenticacaoElements.inputEmailLogin().type(global.usuario.email);
  }

  static digitaSenhaLogin() {
    return AutenticacaoElements.inputSenha().type(global.usuario.senha);
  }

  static realizoLogin() {
    return AutenticacaoElements.realizarLogin().click();
  }

  static preenchoDadosLogin() {
    return this.digitaEmailLogin().then(() => {
      this.digitaSenhaLogin();
      this.realizoLogin();
    });
  }
  static validarLogin() {
    return AutenticacaoElements.validaAutenticacaoPagina().should(
      "have.text",
      global.usuario.nome
    );
  }
  static validarMensagemMyAccount() {
    return AutenticacaoElements.validaMensagemMyAccount().should(
      "have.text",
      "Welcome to your account. Here you can manage all of your personal information and orders."
    );
  }
  static validacaoLogin() {
    return this.validarLogin().then(() => {
      this.validarMensagemMyAccount();
    });
  }
  static emailValido() {
    return AutenticacaoElements.emailUserValido().type(global.usuario.email);
  }
  static insiroSenhaIncorreta() {
    return AutenticacaoElements.senhaIncorreta().type("111");
  }

  static tclEnter() {
    return AutenticacaoElements.teclaEnter().type("{enter}");
  }

  static notificacaoSenhaInv() {
    return AutenticacaoElements.notificaSenhaInv().should(
      "have.text",
      "Invalid password."
    );
  }
}
