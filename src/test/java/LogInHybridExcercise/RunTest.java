package LogInHybridExcercise;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\Resources\\Features\\", dryRun = false, tags = "@login", plugin = {"pretty", "html:target/cucumber-reports"})

public class RunTest
{

}