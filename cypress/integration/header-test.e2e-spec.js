/**
 * This will test the Get a Demo Page and verify that you can enter text in the input fields 
 */

 //import { MainHeader } from '../pages/main-header.po'

 //let header = new MainHeader()
 const PlatformPages = ['recognize', 'celebrate', 'reward','earn','manage']
 const resourcePages = ['RESOURCE LIBRARY','2022 STATE OF RECOGNITION REPORT','EMPLOYEE RECOGNITION GUIDE','REWARDS & RECOGNITION RESEARCH','WHY AWARDCO','AMAZON BUSINESS','CUSTOMER STORIES','HOLIDAY CELEBRATION KITS']
 const companyPages = ['ABOUT','BLOG','CAREERS','CONTACT']
 
 describe('Checks Header on main page',()=>{
     beforeEach(()=>{
         cy.visit('/')
     })
     it('Tests Header and navigation',()=>{
        //verifies Navigation buttons are correct on header
        cy.get('[aria-controls="w-dropdown-list-0"]').contains('Platform').click().then(()=>{
            cy.get('[aria-labelledby="w-dropdown-toggle-0"] [href="/recognize"]').click()
            cy.go('back')
            
            
        })
        
     })
     
 })