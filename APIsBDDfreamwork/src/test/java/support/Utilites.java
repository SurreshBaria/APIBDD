package support;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintStream;

public class Utilites {
    static JsonPath jp;
    static String res;
    Response response;
    public static RequestSpecification reqSpec;//static instance created once and that sigal instance used for entire test
    //rather then creating new.
    public static ResponseSpecification respSpec;

    public RequestSpecification requestSpecification() throws FileNotFoundException {

        if(reqSpec==null) {
            PrintStream log = new PrintStream(new FileOutputStream("log.txt"));
            reqSpec = new RequestSpecBuilder().setBaseUri(AutomationContents.baseURI)
                    .addQueryParam("key", "qaclick123")
                    .addFilter(RequestLoggingFilter.logRequestTo(log))
                    .addFilter(ResponseLoggingFilter.logResponseTo(log))
                    .setContentType(ContentType.JSON).build();
            return reqSpec;
        }
        return reqSpec;
    }
    //ResponseSpecification
    public ResponseSpecification responseSpecification(){


        if(respSpec==null)
        {
            respSpec = new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();
            return respSpec;
        }
        return respSpec;
    }

    public String getJsonPath(Response response, String keyValue){
       res=response.asString();
       jp=new JsonPath(res);
       return jp.get(keyValue).toString();
    }


}

