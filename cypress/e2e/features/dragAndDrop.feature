@dragAndDrop
Feature: Drag and drop element

  Scenario: Drag an item and drop it
    Given I open the droppable page
    When I drag the item and drop it on the drop zone
    Then the drop zone should display "Dropped!"
