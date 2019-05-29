package PageObject;

import LogInHybridExcercise.Utils;
import org.openqa.selenium.By;

public class HomePage extends Utils
{
    private By _clickOnLoginButton = By.xpath("//a[@class='ico-login']");

    public void clickOnLoginButton(){
        Utils.clickOnAnElement(_clickOnLoginButton);
    }
}
