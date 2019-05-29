package LogInHybridExcercise;

import PageObject.HomePage;
import PageObject.LogInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {

    HomePage homePage = new HomePage();
    LogInPage logInPage = new LogInPage();


    @Given("user is on homepage")
    public void userIsOnHomepage() {
    }

    @When("user clicks on Log in button")
    public void userClicksOnLogInButton() {
        homePage.clickOnLoginButton();
    }

    @And("enters invalid {string} and {string}")
    public void entersInvalidAnd(String email, String password) {
        logInPage.enterEmailAndPassword(email, password);
    }

    @Then("user should not be able to log in with invalid credentials")
    public void userShouldNotBeAbleToLogInWithInvalidCredentials() {
        logInPage.assertErrorMessages();
    }
}
