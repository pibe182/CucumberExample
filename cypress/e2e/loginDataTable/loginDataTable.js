import{ Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("precondition", ()=>{
    cy.visit("demo.guru99.com/test/newtours/")
})

 //When("provided valid {string} and {string}",(username, password)=>{
 //   cy.get('[name=userName]').type(username)
 //   cy.get('[name=password]').type(password)
// })

When("I log in as",(datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get('[name=userName]').type(element.username)
        cy.get('[name=password]').type(element.password)
    });
    })

 Then("click submit button", ()=>{
    cy.get('[name=submit]').click()
  })

  And("verify title should be {string}", (title)=>{
    cy.title().should('eq', title)
  })