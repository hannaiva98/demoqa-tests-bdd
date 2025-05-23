@radioButtons
Feature: Radio button selection

  Scenario Outline: Select a radio button
    Given I open the radio buttons page
    When I select radio option "<option>"
    Then The result should be "<option>"

    Examples:
      | option   |
      | Yes      |
      | Impressive |
