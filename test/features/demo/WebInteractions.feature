Feature: WebInteractions Feature

    @smoke
    Scenario Outline: Run the WebInteraction feature
        Given A webpage is open
        When Perform Web Interaction

        Examples:
            | TestID   |
            | WI_TC002 |