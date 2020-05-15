
Feature: Validating place API

  Scenario Outline: Verify if place is being successfully added using AddPlaceAPI
    Given add place payload with "<address>","<language>","<name>"
    When user call "AddPlaceAPI" with "POST" http request
    Then the API call got success with status code 200
    And "status" in response body is "OK"
    And "scope" in response body is "APP"

    Examples:
    |address                 |language |name           |
    |2, side layout, cohen 09|French-IN|Frontline house|

  Scenario: Verify the added data from AddPlace using GetPlaceAPI
    Given place_Id from AddPlaceAPI
    When user call "GetPlaceAPI" with "GET" http request
    Then the API call got success with status code 200
    And "name" in response body is "Frontline house"

  Scenario: Verify if the added data from AddPlace can update address using UpdatePlaceAPI
    Given update place payload
    When user call "UpdatePlaceAPI" with "PUT" http request
    Then the API call got success with status code 200
    And "msg" in response body is "Address successfully updated"

  Scenario: Verify if the added data from AddPlace can delete using DeletePlaceAPI
    Given delete place payload
    When user call "DeletePlaceAPI" with "POST" http request
    Then the API call got success with status code 200
    And "status" in response body is "OK"

