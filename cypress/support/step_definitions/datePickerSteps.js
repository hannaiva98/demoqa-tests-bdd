import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("I open the date picker page", () => {
  cy.visit("/date-picker");
});

When("I select the date {string}", (date) => {
  cy.get("#datePickerMonthYearInput").clear().type(date + "{enter}");
});

Then("the input should display {string}", (expected) => {
  cy.get("#datePickerMonthYearInput").should("have.value", expected);
});
