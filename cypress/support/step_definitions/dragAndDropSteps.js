import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("I open the droppable page", () => {
  cy.visit("/droppable");
});

When('I drag the item and drop it on the drop zone', () => {
  cy.get('#draggable').trigger('mousedown', { which: 1 });
  cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
});

Then('the drop zone should display {string}', (expectedText) => {
  cy.get('#droppable').should('contain.text', expectedText);
});