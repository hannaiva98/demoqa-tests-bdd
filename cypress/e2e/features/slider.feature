@slider
Feature: Slider movement

  Scenario: Move slider to a specific value
    Given I open the slider page
    When I move the slider to 25
    Then the slider value should be 25
