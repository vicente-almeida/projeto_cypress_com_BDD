const RegistroElements = require('../elements/registro.elements')
export default class RegistroPage{

    static acessarAplicacao(){
        cy.visit('').then(() => {
            RegistroElements.btnDeSignin()
            .click()
        });
    }

    

}