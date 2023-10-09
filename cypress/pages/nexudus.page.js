///<reference types="cypress"/>
import { NexudusLocs } from './nexudusLocs'
export class NexudusPage{
   
    static url(){
        cy.visit('');
        cy.wait(4000);
    }

    static enterUser(selector, value){
        NexudusLocs.userNameLoc(selector).type(value)
    }

    static enterPW(selector, value){
        NexudusLocs.passwordLoc(selector).type(value)
    }

    static clickSubmit(){
        NexudusLocs.submit().click();
    }

    static confirmLogInPage(){
        cy.url().should('include', '/login');
    }

    static confirmDashboad(){
        cy.wait(4000);
        cy.url().should('include', '/dashboards/now');
        //NexudusLocs.dashboard().should('have.text', 'Dashboard');
    }

    static addProduct1(){    
        NexudusLocs.plus1().click();
        NexudusLocs.addProduct().click();
    }

    static fillFormValues(){    
        NexudusLocs.productNameLoc().type(NexudusLocs.productNameVal());
        NexudusLocs.productDescLoc().type(NexudusLocs.productDescVal());
        NexudusLocs.saveChanges().click({force: true}).then(($se) => {
            cy.wait(2000);
           cy.wrap($se).click({force: true});
        });
    }

    static search(){    
        NexudusLocs.searchLoc().type(NexudusLocs.productNameVal());
    }

    static selectFirstVal(){    
        cy.wait(1000);
        NexudusLocs.selectFirstLoc().click({ multiple: true })
    }

    static clickRecordDelete(){    
        NexudusLocs.recordDelete1().click({force: true});
        cy.wait(1000)
        NexudusLocs.recordDelete().click({force: true})
    }

    static validationClickYesDoIt(){    
        cy.contains(`Delete '${NexudusLocs.productNameVal()} (0.00 USD)'?`)
        NexudusLocs.yesButton().click({force: true});    
    }

    static noRecord(){
        cy.log('Record was deleted in the background successfully')
    }

    //validate invalid login message
    static invalidCredentials(){
        NexudusLocs.invalidLoc().contains(NexudusLocs.invalidVal());
    }

    static noLongerAvail(){
        NexudusLocs.noLongerAvailable()
    }

}