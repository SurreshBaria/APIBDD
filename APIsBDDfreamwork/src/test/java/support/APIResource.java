package support;
//enum is special class in jav which has collection of constant or method
public enum APIResource {

    AddPlaceAPI("/maps/api/place/add/json"),
    GetPlaceAPI("/maps/api/place/get/json"),
    UpdatePlaceAPI("/maps/api/place/update/json"),
    DeletePlaceAPI("/maps/api/place/delete/json");

    String resource;

    APIResource(String resource)
    {
        this.resource=resource;
    }
    public String getResource()
    {
        return resource;
    }
}
