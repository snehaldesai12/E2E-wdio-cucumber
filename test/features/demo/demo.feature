Feature: Demo Feature

  # @demo
    Scenario Outline: Run the demo feature
        Given Google Homepage is open
        When Search <SearchItem> is entered
        Then Click on first search result
        Then URL should match with <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | Demo_TC001 | WWDIO       | https://webdriver.io/ |