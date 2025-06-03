@datePicker
Feature: Date Picker selection
# TODO this scenario might to change dates using dropdowns
  Scenario: Select a specific date
    Given I open the date picker page
    When I select the date "05/30/2025"
    Then the input should display "05/30/2025"
