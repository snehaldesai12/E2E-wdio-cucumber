# Feature: Inventory Feature

# @demo
# Scenario Outline: Run the Inventory feature
#     Given Login to inventory web app
#     Then Inventory page should list <NumberOfProducts>
#     # Then Validate all products have valid price

#     Examples:
#         | TestID     | NumberOfProducts |
#         | INVT_TC001 | 6                |

Feature: Inventory

    @demo
    Scenario Outline: Demo Inventory

        Given Login to inventory web app
        Then Inventory page should list <NumberOfProducts>
        # Then Validate all products have valid price

        Examples:

            | TestID | NumberOfProducts |
            | INV TC001 | 6 |

