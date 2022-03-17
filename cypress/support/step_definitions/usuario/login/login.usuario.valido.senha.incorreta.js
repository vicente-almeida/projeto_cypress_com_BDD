/// <reference types="cypress" />

/* global Then, When, Given */

const AutenticacaoPage = require("../../../pages/autenticacao.page")

And("preenchi o campo email com um usuario valido", () => {
  global.usuario.email = "visquinhavipal@gmail.com";

  AutenticacaoPage.emailValido()
});
And("preenchi o campo senha com uma senha invalida", () => {
  AutenticacaoPage.insiroSenhaIncorreta()
});
And("teclo Enter", () => {
  AutenticacaoPage.tclEnter()
});

Then("o sistema me notifica que a senha e invalida", () => {
  AutenticacaoPage.notificacaoSenhaInv()
});
