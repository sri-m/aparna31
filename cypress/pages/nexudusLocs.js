///<reference types="cypress"/>
export class NexudusLocs{
 //declared locators here
 static userNameLoc(){ 
    return cy.get('input[name="Email"]').should('be.visible'); 
 }
 static userNameVal(){
    return 'adrian+1004930927@nexudus.com';
 }
 static passwordLoc() {
    return cy.get('input[name="Password"]').should('be.visible');
 }
 static passwordVal(){
    return '4efPNc*LM3-6q0';
 }
 static submit(){
    return cy.get('button[type="submit"]').should('be.visible');
 }
 static dashboard(){
    return cy.get('li:last-child>a[title="Dashboard"]').should('be.visible');
 }
 static plus1(){
    return cy.get('#newRecordMenu').should('be.visible');
 }
 static addProduct(){
    return cy.get('button[class="euiContextMenuItem"]:last-child').should('be.visible');
 }
 static productNameLoc(){
    return cy.get('input[data-test-subj="product_Name"]').should('be.visible');
 }
 static productNameVal(){
    return 'Aparna31';
 }
 static productDescLoc(){
    return cy.get('textarea[data-test-subj="product_Description"]').should('be.visible');
 }
 static productDescVal(){
    return '2 LAP TOPS';
 }
 static productPriceLoc(){
    return cy.xpath('//input[@data-test-subj="product_Price"]').should('be.visible');
 }
 static productPriceVal(){
    return '$150.00';
 }
 static saveChanges(){
    return cy.get('div.euiOverlayMask.css-1sm7f9p-euiOverlayMask-belowHeader.undefined > div:nth-child(2) > div > div.euiFlyoutFooter.css-1dnjjp9-euiFlyoutFooter > div > div:nth-child(2) > div > div:nth-child(2) > button').should('be.visible');
 }
 static searchLoc(){
    return cy.get('input[type="search"]').should('be.visible');
 }
 static selectFirstLoc(){
    return cy.get('ul>li[aria-posinset="1"]').should('be.visible');
 }
 static yesButton(){
    return cy.get('.euiModalFooter > .euiButton > .css-1bascr2-euiButtonDisplayContent').should('be.visible');
 }
 static recordDelete(){
    return cy.get('button[class="euiButton css-s7hl0p-euiButtonDisplay-m-defaultMinWidth-fill-danger"] span[class="eui-textTruncate"]').should('be.visible');
 }
 static recordDelete1(){
    return cy.get('div[class="euiText css-11139k5-euiText-m-euiTextAlign-left"]').should('be.visible');
 }
 static invalidLoc(){
    return cy.get('.euiText.css-5okgsa-euiText-s-euiTextColor-default-euiCallOut__description').should('be.visible');
 }
 static invalidVal(){
    return "The email or password is incorrect.";
 }
 static noLongerAvailable(){
    cy.wait(1000)
    return cy.contains('No items found')
 }
}