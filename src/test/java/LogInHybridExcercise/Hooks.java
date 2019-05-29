package LogInHybridExcercise;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Utils
{
    BrowserSelector browserSelector = new BrowserSelector();
    LoadProp loadProp = new LoadProp();
    //static Boolean beforeAll = true;


    //    public static void afterAllThread(){
//        driver.quit();
//    }
    @Before
    public void openBrowser()
    {

        browserSelector.setupBrowser();

        // Below is the method to use all the scenarios in the same browser
        //        if(beforeAll)
//        {
//            Runtime.getRuntime().addShutdownHook(new Thread() {
//                public void run() {
//                    //afterAllThread();
//                    driver.quit();
//                }
//            });
//            browserSelector.setupBrowser();
//            beforeAll = false;
//        }
//        // Normal BeforAll
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed())
        {
            Utils.screenshotOfTheBrowserUsingCucumber(scenario);
        }
        driver.quit();
    }
}
