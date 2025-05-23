import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the checkbox page", () => {
  cy.visit("/checkbox");
});

When("I expand all checkboxes", () => {
  cy.get('.rct-option-expand-all').click();
});

When("I select the {string} checkbox", (label) => {
  cy.get('.rct-option-expand-all').click(); 

 
  cy.contains('.rct-node', label).find('label').click();
});


Then("The selected result should contain {string}", (label) => {
 
  function toCamelCase(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }

  const expectedText = toCamelCase(label);

  cy.get('#result').should('contain.text', expectedText);
});
