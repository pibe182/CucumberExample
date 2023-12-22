import{ Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("precondition", ()=>{
    cy.visit("demo.guru99.com/test/newtours/")
})

 When("provided valid username and password",()=>{
    cy.get('[name=userName]').type('mercury')
    cy.get('[name=password]').type('mercury')
 })

 Then("click submit button", ()=>{
    cy.get('[name=submit]').click()
  })

  And("verify title", ()=>{
    cy.title().should('eq', 'Login: Mercury Tours')
  })