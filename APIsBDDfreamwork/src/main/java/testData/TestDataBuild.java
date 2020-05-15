package testData;

import payloads.AddPlacePojoClasses;
import payloads.Location;

import java.util.ArrayList;
import java.util.List;

public class TestDataBuild {

    public AddPlacePojoClasses addPlacePayload(String address,String language,String name){
        AddPlacePojoClasses ap=new AddPlacePojoClasses();
        ap.setAccuracy(50);
        ap.setAddress(address);
        ap.setLanguage(language);
        ap.setName(name);
        ap.setWebsite("http://google.com");
        ap.setPhone_number("(+91) 983 893 3937");
        List<String> myList=new ArrayList<String>();
        myList.add("shoe park");
        myList.add("shop");
        ap.setTypes(myList);
        Location l=new Location();
        l.setLat(-38.383494);
        l.setLng(33.427362);
        ap.setLocation(l);
        return ap;
    }

    public String updatePlacePayload(String place_id, String address){
        return"{\n" +
                "\"place_id\":\""+place_id+"\",\n" +
                "\"address\":\""+address+"\",\n" +
                "\"key\":\"qaclick123\"\n" +
                "}";
    }

    public String deletePlacePayload(String place_id){
        return"{\n" +
                "    \"place_id\":\""+place_id+"\"\n" +
                "}";
    }

}
