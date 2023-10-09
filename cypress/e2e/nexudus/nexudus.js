///<reference types="cypress"/>
///// <reference types="cypress-xpath" />
import { Given } from 'cypress-cucumber-preprocessor/steps';
import { NexudusPage } from '../../pages/nexudus.page';
import { NexudusLocs } from '../../pages/nexudusLocs';
Given("User access nexudus website", () => {
    NexudusPage.url();
})

When("User confirm the login page is presented", () => {
    NexudusPage.confirmLogInPage();
})

When("User enter userName", () => {
    NexudusPage.enterUser(NexudusLocs.userNameLoc(), NexudusLocs.userNameVal());
})

When("User enter password", () => {
    NexudusPage.enterPW(NexudusLocs.passwordLoc(), NexudusLocs.passwordVal());
})

When("User click submit button", () => {
    NexudusPage.clickSubmit();
})

When("User Confirm login succeeds and you are presented with the dashboard home page", () => {
    NexudusPage.confirmDashboad();
})

When("User click add product", () => {
    NexudusPage.addProduct1();
})

When("User click manual entry", () => {
    cy.xpath('//button[contains(.,"Manual entry")]').click();
})

When("User fills form values", () => {
    NexudusPage.fillFormValues();
})

When("User search by the newly created product", () => {
    NexudusPage.search();
})

When("User select the first item in the list", () => {
    NexudusPage.selectFirstVal();
})

When("User click record then delete", () => {
    NexudusPage.clickRecordDelete();
})

When("User confirm the modal dialog clicking on Yes do it", () => {
    NexudusPage.validationClickYesDoIt();
})

When("User confirm the product is no longer available", () => {
    NexudusPage.noRecord();
    NexudusPage.noLongerAvail();
})

//invalid methods here.
When("User enter {string} userName", (userName) => {
    NexudusPage.enterUser(NexudusLocs.userNameLoc(), userName);
})

When("User enter {string} password", (password) => {
    NexudusPage.enterPW(NexudusLocs.passwordLoc(), password);
})

When("User click submitBtn", () => {
    NexudusPage.clickSubmit();
})

When("User confirm a clear error message is presented on screen", () => {
    NexudusLocs.invalidVal();
})