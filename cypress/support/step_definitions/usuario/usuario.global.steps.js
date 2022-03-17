/// <reference types="cypress" />

/* global Then, When, Given */
const AutenticacaoPage = require('../../pages/autenticacao.page')
const RegistroPage = require('../../pages/registro.page')



Given("clico no botao de signin", () => {
  AutenticacaoPage.cliqueBtnLogin()

});
And("clico para realizar o login", () => {
  AutenticacaoPage.realizoLogin()
});
Given("Acesso a aplicacao", () => {
  RegistroPage.acessarAplicacao()

});