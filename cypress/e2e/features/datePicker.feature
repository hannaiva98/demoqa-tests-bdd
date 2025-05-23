@datePicker
Feature: Date Picker selection

  Scenario: Select a specific date
    Given I open the date picker page
    When I select the date "05/30/2025"
    Then the input should display "05/30/2025"
