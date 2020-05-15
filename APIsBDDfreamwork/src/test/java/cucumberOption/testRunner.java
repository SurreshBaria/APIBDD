package cucumberOption;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C://Api_Automation//API_ALL//APIsBDDfreamwork//src//test//resources",
        glue = {"stepdefs"},
        plugin ={"pretty","html:target/cucumber-html-report","json:target/cucumber.json"}
)
public class testRunner {


}
