const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  e2e: {
      "baseUrl": "https://dashboard.nexudus.com/login?continue_to=%2F",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
  },
});

//npx cypress open 
//node .\cypress\cucumberReport.js