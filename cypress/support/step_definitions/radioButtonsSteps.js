import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("I open the radio buttons page", () => {
  cy.visit("/radio-button");
});

When("I select radio option {string}", (option) => {
  cy.contains('label', option).click();
});

Then("The result should be {string}", (text) => {
  cy.get('.text-success').should('have.text', text.split(" ").pop());
});
