

export default class AutenticacaoElements{
    
    static acessaUrl(){
        return cy.visit('');
    }

    static btnSignin(){
        return cy.get(".login")
 
     }

     static realizarLogin(){
         return cy.get("#SubmitLogin")
     }

    
    }
   
