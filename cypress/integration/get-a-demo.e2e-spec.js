/**
 * This will test the Get a Demo Page and verify that you can enter text in the input fields 
 */

 import { GetADemoPage } from '../pages/get-a-demo.po'

 let demoPage = new GetADemoPage()
 let gmailEmail = 'helpdesk@gmail.com'
 let awardcoEmail = 'test@awardco'
 
 describe('Get A Demo Page',()=>{
     beforeEach(()=>{
         cy.visit('/demo')
     })
     it('Tests that Input fields can be entered correctly',()=>{
        //verifies calendar and Preferred Demo Time is not showing
        cy.get('[data-pika-day="1"]').should('have.length', 0);
        cy.get('[name="demo_time"]').should('have.length', 0);
        
        demoPage.inputField("First Name",'test').should('have.value','test');
        demoPage.inputField("Last Name",'test').should('have.value','test');
        demoPage.inputField("Work Email",'test').should('have.value', 'test');
        demoPage.inputField("Phone Number",'test').should('have.value','test');
        demoPage.inputField("Company Name",'test').should('have.value','test');
        //Tests that Calendar can be updated and dropdown is updated correctly
        cy.get('.hs-dateinput').click().get('[data-pika-day="1"]').click();
        cy.get('[name="demo_time"]').select('09:00 AM (EST)').should('contain','09:00 AM (EST)')
        
        //TO DO
        //Future Improvement - When putting in an awardco email verify popup, Verify email and phone number tests. 
        // test to submit and verify that API received the call
     })
     it('Verify incorrect email entered',()=>{
         //Verifies that gmail is not entered
         demoPage.inputField("Work Email",gmailEmail).should('have.value', gmailEmail);
         demoPage.incorrectEmail();

        //Verifies award.co email entered
        demoPage.inputField("Work Email",awardcoEmail).should('have.value', awardcoEmail);
        cy.get('.modal-window').should('have.length', 1);
        cy.get('.modal-window').should('contain',"It looks like you're already a customer");
        cy.get('.modal-window > .button').should('have.attr','href','https://awardco.zendesk.com')
        
     })
     
 })