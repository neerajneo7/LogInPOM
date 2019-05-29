package LogInHybridExcercise;

import cucumber.api.Scenario;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;
import ru.yandex.qatools.ashot.shooting.ShootingStrategies;

import javax.imageio.ImageIO;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static com.sun.deploy.cache.Cache.copyFile;

public class Utils extends BasePage
{
    //Clicking element

    public static void clickOnAnElement(By by)
    {
        try
        {
            driver.findElement(by).click();

        }catch(ElementClickInterceptedException e)
        {
            System.out.println("Error Message" + e.getMessage());
        }
    }
    public static String getTextMethod(By by)
    {
        String text = driver.findElement(by).getText();
        return text;
    }

    public static void hooverOnElement(By by,By subby)
    {
        Actions actions = new Actions(driver);
        WebElement mainElement = driver.findElement(by);
        WebElement subElement = driver.findElement(subby);
        actions.moveToElement(mainElement).moveToElement(subElement).click().build().perform();
    }


    public static void sortPriceIsInAscendingOrDescendingOrder(By by)
    {
        try{
            List<WebElement> price = driver.findElements(by);
            System.out.println(price.size());
            //List ourAl = new ArrayList<>();
            for (int i = 0; i < price.size(); i=i+1)
            {
                System.out.println(price.get(i).getText());
            }

        }catch(NoSuchElementException e)
        {
            e.printStackTrace();
        }

    }

    //Enter text in input field

    //Cucumber screenshot method
    public static void screenshotOfTheBrowserUsingCucumber(Scenario scenario)
    {
        String timeStamp = new SimpleDateFormat("dd.MM.yy.HH.mm.ss").format(new Date());
        String screenshotName = scenario.getName().replaceAll("[.,;:?!]", "")+timeStamp+".png";
        try
        {
            //This takes a screenshot from the driver at save it to the specified location
            File sourcePath = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            //Building up the destination path for the screenshot to save
            //Also make sure to create a folder 'screenshots' within the cucumber-reports folder
            File destinationPath = new File(System.getProperty("user.dir")+
                    "/target/cucumber-reports/extent-reports/screenshots/"+screenshotName+".png");
            //Copy taken screenshot from source location to the destination location
            FileUtils.copyFile(sourcePath,destinationPath );
            scenario.write("!!-----------.......Scenario Failed......----------!! Please see attached screenshot for the error/issue");
            //attach the screenshot to our report
            scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES),"image/png");
        }catch(IOException e){
            e.printStackTrace();
        }
    }

    //Take screenshot of the browser
    public static void screenshotOfTheBrowser(String screenshotName)
    {
        //This takes the screen shot of the browser and will store the image in specified location
        try {
            TakesScreenshot ts = (TakesScreenshot) driver;
            File source = ts.getScreenshotAs(OutputType.FILE);
            //+screenshotName will give the different name everytime the screen shot has been captured so it is
            //different name everytime to overcome the overwriting the shots.
            FileUtils.copyFile(source, new File("./Screenshots/" + screenshotName+ ".png"));
            System.out.println("Screenshot taken");
        } catch (Exception e) {
            System.out.println("Exception while taking screenshot" + e.getMessage());
        }
    }

    //Take screenshot of full display(full)
    public static void screenshotOfFullCurrentDisplay(String nameOfScreenshot) {
        Screenshot fpScreenshot = new AShot().shootingStrategy(ShootingStrategies.viewportPasting(1000)).takeScreenshot(driver);
        try {
            ImageIO.write(fpScreenshot.getImage(), "PNG", new File("./Screenshots/" + nameOfScreenshot + ".png"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }



    //Date stamp short
    public static void dateStampShort()
    {
        try {
            Date shortdate = new Date();
            String strDateFormat = "dd/MMM/yyyy";
            SimpleDateFormat sdf = new SimpleDateFormat(strDateFormat);
            System.out.println("Current Time : " + sdf.format(shortdate));
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    //Date stamp with time
    public static void dateStampWithTime()
    {
        Date longDate = new Date();// Current System Date and Time is assigned to the object Date
        String strDateFormat = "E, dd MMM yyyy  hh:mm:ss  a  zz ";// Date format is specified
        SimpleDateFormat sdf = new SimpleDateFormat(strDateFormat); //Date format string is passed as an argument to the Date format object
        System.out.println("Current Time and Date : " + sdf.format(longDate));
    }


    public static void assertTextMessage(String expected, By by)
    {

        try{
            String actual = driver.findElement(by).getText();
            Assert.assertEquals(expected,actual);
            System.out.println("Exptected Result = " + expected);
            System.out.println("Actual Result    = " + actual);
        } catch (AssertionError e)
        {
            e.printStackTrace();
        }

    }

    public static void assertContainsText(String expected, By by)
    {
        try {
            boolean actual = driver.findElement(by).getText().contains(expected);
            Assert.assertTrue(true);
            System.out.println("Expected value : " + expected);
            System.out.println("Actual value   : " + actual);
        }catch(AssertionError e){
            e.printStackTrace();
        }
    }

    public static void assertUsingSubstring(String expected, By by)
    {
        try {
            String actual = driver.findElement(by).getText().substring(0,1);
            Assert.assertEquals(expected, actual);
            System.out.println("Expected Value : " + expected);
            System.out.println("Actual Value   : " + actual);
        }catch(AssertionError e){
            e.printStackTrace();
        }
    }

    public static void assertURL(String expected)
    {
        try {
            String URL = driver.getCurrentUrl();
            Assert.assertEquals(URL, expected);
            System.out.println("Expected Result : " + expected);
            System.out.println("Actual Result : " + URL);
        }catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    public static void assertCurrentURL(String url)
    {
        try {
            Assert.assertTrue(driver.getCurrentUrl().equals(url));
            System.out.println(url);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    //Get Selected Value From Dropdown
    public static void selectValueFromDropdown(By by, String value)
    {
        Select select = new Select(driver.findElement(by));
        try {
            select.selectByVisibleText(value);
            // select.selectByIndex(2);
        }catch(NoSuchElementException e){
            e.printStackTrace();
        }

    }
    public static void enterTextInTheField(By by, String text)
    {
        driver.findElement(by).sendKeys(text);
    }

    //Clear and enter text in input field
    public static void clearAndEnterTextInTheField(By by, String text)
    {
        driver.findElement(by).clear();
        driver.findElement(by).sendKeys(text);
    }

}
