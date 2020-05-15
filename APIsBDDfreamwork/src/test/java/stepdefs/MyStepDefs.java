package stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;
import support.APIResource;
import support.AutomationContents;
import support.Utilites;
import testData.TestDataBuild;

import java.io.FileNotFoundException;

import static io.restassured.RestAssured.given;

public class MyStepDefs extends Utilites {
    static RequestSpecification request;
    TestDataBuild data=new TestDataBuild();
    static Response response;
    static String place_id;
    static APIResource httpResource;


    @Given("^add place payload with \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void addPlacePayloadWith(String address, String language, String name) throws FileNotFoundException {
        request=given().spec(requestSpecification()).body(data.addPlacePayload(address, language, name));
    }
    @When("^user call \"([^\"]*)\" with \"([^\"]*)\" http request$")
    public void userCallWithHttpRequest(String resource, String method)  {
     //constructor will be called with value of resource which you pass
       APIResource httpResource = APIResource.valueOf(resource);
        System.out.println(httpResource.getResource());

        if (method.equalsIgnoreCase("GET")) {
            response = request.when().get(httpResource.getResource());
                    //.then().spec(responseSpecification()).extract().response();//Assertion step verify in @then step
        }
        else if(method.equalsIgnoreCase("POST")) {
            response = request.when().post(httpResource.getResource());
                   // .then().spec(responseSpecification()).extract().response();//Assertion step verify in @then step
        }
        else if(method.equalsIgnoreCase("PUT")){
            response = request.when().put(httpResource.getResource());
        }

    }
    @Then("^the API call got success with status code (\\d+)$")
    public void the_API_call_got_success_with_status_code(int code)  {
        Assert.assertEquals(response.getStatusCode(),code);
    }
    @And("^\"([^\"]*)\" in response body is \"([^\"]*)\"$")
    public void inResponseBodyIs(String keyValue, String expectedValue)  {//keyValue of STATUS-key=ok
        Assert.assertEquals(getJsonPath(response,keyValue),expectedValue);
    }

    @Given("^place_Id from AddPlaceAPI$")
    public void place_idFromAddPlaceAPI() throws FileNotFoundException {
        place_id=getJsonPath(response,"place_id");
        request=given().spec(requestSpecification()).queryParam("place_id",place_id);

    }

    @Given("^update place payload$")
    public void updatePlacePayload() throws FileNotFoundException {
        request=given().spec(requestSpecification()).body(data.updatePlacePayload(place_id, AutomationContents.address));

    }

    @Given("^delete place payload$")
    public void deletePlacePayload() throws FileNotFoundException {
        request=given().spec(requestSpecification()).body(data.deletePlacePayload(place_id));
    }
}
