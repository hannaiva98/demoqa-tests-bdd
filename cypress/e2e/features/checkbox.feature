@checkbox
Feature: Checkbox selection

  Scenario Outline: Select a checkbox and verify result
    Given I open the checkbox page
    When I expand all checkboxes
    And I select the "<item>" checkbox
    Then The selected result should contain "<item>"

Examples:
  | item      |
  | Notes     |
  | Angular   |
  | React     |
  | Word File  |
  | Excel File |

