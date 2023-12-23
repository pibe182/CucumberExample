import{ Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("precondition", ()=>{
    cy.visit("demo.guru99.com/test/newtours/")
})

When("action", ()=>{
    cy.title().should('eq','Welcome: Mercury Tours')
})

Then("testeable outcome", ()=>{
    cy.title().should('eq', 'Welcome: Mercury Tours')
})