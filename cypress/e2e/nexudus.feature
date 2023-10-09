Feature: Nexudus application automation testing

Background: Nexudus login
Given User access nexudus website
When  User confirm the login page is presented

Scenario: Nexudus logIn with correct credentials
And   User enter userName
And   User enter password
And   User click submit button
Then  User Confirm login succeeds and you are presented with the dashboard home page
When  User click add product
And   User click manual entry
And   User fills form values
And   User search by the newly created product
And   User select the first item in the list
And   User click record then delete
And   User confirm the modal dialog clicking on Yes do it
Then  User confirm the product is no longer available

Scenario: Nexudus logIn with invalid credentials
And   User enter "bad@example.com" userName
And   User enter "badpassword" password 
And   User click submitBtn
Then  User confirm a clear error message is presented on screen
