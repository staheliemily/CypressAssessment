export class GetADemoPage {
    inputField(inputField,placeHolderText){
        return cy.get(`[placeholder="${inputField}"]`).type(placeHolderText)
    }
}