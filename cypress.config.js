const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/e2e/*.feature',
  },
  // Add the following configuration for cypress-cucumber-preprocessor
  'cypress-cucumber-preprocessor': {
    step_definitions: 'cypress/e2e', // Update this path based on your project structure
  },
})

