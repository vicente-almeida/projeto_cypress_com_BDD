/// <reference types="cypress" />

/* global Then, When, Given */
const AutenticacaoPage = require('../../pages/autenticacao.page')



Given("Acesso a aplicacao", () => {
  AutenticacaoPage.acessoUrl()
});

When("clico no botao de signin", () => {
  AutenticacaoPage.cliqueBtnLogin()

});
And("clico para realizar o login", () => {
  AutenticacaoPage.realizoLogin()
});
