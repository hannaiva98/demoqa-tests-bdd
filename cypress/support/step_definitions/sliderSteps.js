import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


//TODO remove locators to the constructor section in Page Object
Given("I open the slider page", () => {
  cy.visit("https://demoqa.com/slider");
});

When("I move the slider to {int}", (value) => {
  cy.get('#sliderContainer input[type="range"]')
    .should('be.visible')
    .then($slider => {
      const min = Number($slider.attr('min')) || 0;
      const max = Number($slider.attr('max')) || 100;
      const width = $slider[0].getBoundingClientRect().width;


      const position = ((value - min) / (max - min)) * width;

      cy.wrap($slider)
        .trigger('mousedown', { button: 0, clientX: 0, force: true })
        .trigger('mousemove', { button: 0, clientX: position, force: true })
        .trigger('mouseup', { force: true });
    });
});

Then("the slider value should be {int}", (value) => {
  cy.wait(500);
  cy.get("#sliderValue").should("have.value", value.toString());
});
