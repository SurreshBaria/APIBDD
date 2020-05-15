$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PlaceValidation.feature");
formatter.feature({
  "line": 2,
  "name": "Validating place API",
  "description": "",
  "id": "validating-place-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify if place is being successfully added using AddPlaceAPI",
  "description": "",
  "id": "validating-place-api;verify-if-place-is-being-successfully-added-using-addplaceapi",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "add place payload with \"\u003caddress\u003e\",\"\u003clanguage\u003e\",\"\u003cname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user call \"AddPlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "validating-place-api;verify-if-place-is-being-successfully-added-using-addplaceapi;",
  "rows": [
    {
      "cells": [
        "address",
        "language",
        "name"
      ],
      "line": 12,
      "id": "validating-place-api;verify-if-place-is-being-successfully-added-using-addplaceapi;;1"
    },
    {
      "cells": [
        "2, side layout, cohen 09",
        "French-IN",
        "Frontline house"
      ],
      "line": 13,
      "id": "validating-place-api;verify-if-place-is-being-successfully-added-using-addplaceapi;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify if place is being successfully added using AddPlaceAPI",
  "description": "",
  "id": "validating-place-api;verify-if-place-is-being-successfully-added-using-addplaceapi;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "add place payload with \"2, side layout, cohen 09\",\"French-IN\",\"Frontline house\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user call \"AddPlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2, side layout, cohen 09",
      "offset": 24
    },
    {
      "val": "French-IN",
      "offset": 51
    },
    {
      "val": "Frontline house",
      "offset": 63
    }
  ],
  "location": "MyStepDefs.addPlacePayloadWith(String,String,String)"
});
formatter.result({
  "duration": 1854603300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AddPlaceAPI",
      "offset": 11
    },
    {
      "val": "POST",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.userCallWithHttpRequest(String,String)"
});
formatter.result({
  "duration": 2954503000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.the_API_call_got_success_with_status_code(int)"
});
formatter.result({
  "duration": 4823899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "status",
      "offset": 1
    },
    {
      "val": "OK",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.inResponseBodyIs(String,String)"
});
formatter.result({
  "duration": 432409000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scope",
      "offset": 1
    },
    {
      "val": "APP",
      "offset": 29
    }
  ],
  "location": "MyStepDefs.inResponseBodyIs(String,String)"
});
formatter.result({
  "duration": 11171100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify the added data from AddPlace using GetPlaceAPI",
  "description": "",
  "id": "validating-place-api;verify-the-added-data-from-addplace-using-getplaceapi",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "place_Id from AddPlaceAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user call \"GetPlaceAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\"name\" in response body is \"Frontline house\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.place_idFromAddPlaceAPI()"
});
formatter.result({
  "duration": 9681500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetPlaceAPI",
      "offset": 11
    },
    {
      "val": "GET",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.userCallWithHttpRequest(String,String)"
});
formatter.result({
  "duration": 1091677901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.the_API_call_got_success_with_status_code(int)"
});
formatter.result({
  "duration": 155700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 1
    },
    {
      "val": "Frontline house",
      "offset": 28
    }
  ],
  "location": "MyStepDefs.inResponseBodyIs(String,String)"
});
formatter.result({
  "duration": 10485401,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify if the added data from AddPlace can update address using UpdatePlaceAPI",
  "description": "",
  "id": "validating-place-api;verify-if-the-added-data-from-addplace-can-update-address-using-updateplaceapi",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "update place payload",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user call \"UpdatePlaceAPI\" with \"PUT\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "\"msg\" in response body is \"Address successfully updated\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.updatePlacePayload()"
});
formatter.result({
  "duration": 2341300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UpdatePlaceAPI",
      "offset": 11
    },
    {
      "val": "PUT",
      "offset": 33
    }
  ],
  "location": "MyStepDefs.userCallWithHttpRequest(String,String)"
});
formatter.result({
  "duration": 1031616800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.the_API_call_got_success_with_status_code(int)"
});
formatter.result({
  "duration": 155901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "msg",
      "offset": 1
    },
    {
      "val": "Address successfully updated",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.inResponseBodyIs(String,String)"
});
formatter.result({
  "duration": 11992900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify if the added data from AddPlace can delete using DeletePlaceAPI",
  "description": "",
  "id": "validating-place-api;verify-if-the-added-data-from-addplace-can-delete-using-deleteplaceapi",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "delete place payload",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user call \"DeletePlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.deletePlacePayload()"
});
formatter.result({
  "duration": 1893000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DeletePlaceAPI",
      "offset": 11
    },
    {
      "val": "POST",
      "offset": 33
    }
  ],
  "location": "MyStepDefs.userCallWithHttpRequest(String,String)"
});
formatter.result({
  "duration": 1190383400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.the_API_call_got_success_with_status_code(int)"
});
formatter.result({
  "duration": 83800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "status",
      "offset": 1
    },
    {
      "val": "OK",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.inResponseBodyIs(String,String)"
});
formatter.result({
  "duration": 8148800,
  "status": "passed"
});
});