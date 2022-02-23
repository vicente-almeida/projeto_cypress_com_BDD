const AutenticacaoElements = require('../elements/autenticacao.elements')

export default class AutenticacaoPage{

    static acessoUrl(){
        return cy.visit('').then(()=>{
            AutenticacaoElements.acessaUrl().url().should('include', 'http://automationpractice.com/index.php')
        })
    }

    static cliqueBtnLogin() {
        return cy.visit('').then(()=>{
          AutenticacaoElements. btnSignin().click()
          .url().should('include', '?controller=authentication&back=my-account')  
         })
         
     }

     static realizoLogin(){
         AutenticacaoElements.realizarLogin().click()
         
     
        }
    }

