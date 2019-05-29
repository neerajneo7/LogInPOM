package PageObject;

import LogInHybridExcercise.Utils;
import org.openqa.selenium.By;

public class LogInPage extends Utils
{
    private By _enterEmail = By.xpath("//input[@class='email']");
    private By _enterPassword = By.xpath("//input[@class='password']");
    private By _login = By.cssSelector("[class*='button-1 login-button']");
    private By _assertErrorMessage = By.cssSelector("[class='message-error validation-summary-errors']");
    private By _assertEmailError = By.cssSelector("[class='field-validation-error']");
    private By _errorMessageSecond = By.cssSelector("[class='message-error validation-summary-errors']>ul>li");



    public void enterEmailAndPassword(String email, String password)
    {
        Utils.enterTextInTheField(_enterEmail,(email));
        Utils.enterTextInTheField(_enterPassword,(password));
        Utils.clickOnAnElement(_login);
    }

    public String getTextFromErrorMessage(){
        String errorMessage = driver.findElement(_errorMessageSecond).getText();
        return errorMessage;
    }

    public void assertErrorMessages(){
        Boolean isPresent = driver.findElements(_errorMessageSecond).size()>0;
        if (isPresent) {
            if (getTextFromErrorMessage().equals("No customer account found")) {
                Utils.assertTextMessage("Login was unsuccessful. Please correct the errors and try again.\nNo customer account found", _assertErrorMessage);

            } else if (getTextFromErrorMessage().equals("The credentials provided are incorrect")) {
                Utils.assertTextMessage("Login was unsuccessful. Please correct the errors and try again.\nThe credentials provided are incorrect", _assertErrorMessage);
            }
        }
        else {
            Utils.assertTextMessage("Please enter your email",_assertEmailError);
        }

    }
}
