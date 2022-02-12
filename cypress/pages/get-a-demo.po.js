export class GetADemoPage {
    inputField(inputField,placeHolderText){
        return cy.get(`[placeholder="${inputField}"]`).clear().type(placeHolderText+'{enter}')
    }

    incorrectEmail(){
        cy.get('.hs-error-msg').should('contain','This form does not accept addresses from gmail.com')
    }
}