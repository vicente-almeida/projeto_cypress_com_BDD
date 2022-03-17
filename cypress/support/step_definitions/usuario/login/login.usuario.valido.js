/// <reference types="cypress" />
/* global Then, When, Given */
const AutenticacaoPage = require("../../../pages/autenticacao.page")

And("preenchi os dados de login com usuario valido", () => {
  global.usuario.email = "visquinhavipal@gmail.com";
  global.usuario.nome = "Visco Silva";

  AutenticacaoPage.preenchoDadosLogin();
});
Then(
  "o sistema realiza meu login com sucesso me autenticando na pagina",
  () => {
    AutenticacaoPage.validarLogin();
    AutenticacaoPage.validarMensagemMyAccount();
  }
);
