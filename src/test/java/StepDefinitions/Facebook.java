package StepDefinitions;

import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;

import static StepDefinitions.Hooks.driver;   // This is required to link HOOKS


public class Facebook {

    @Given("^: I am a chrome user$")
    public void i_am_a_chrome_user() {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Test is about to begin");
    }

    @When("^I connect to \"([^\"]*)\" page$")
    public void i_connect_to_page(String Page) {
        // Write code here that turns the phrase above into concrete actions
        //driver = new ChromeDriver();

        driver.get(Page);
    }

    @Then("^I see login Page$")
    public void i_see_login_Page() {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(driver.getTitle().contains("Facebook"));
    }

    @Then("^when I pass on icorrect details$")
    public void when_I_pass_on_icorrect_details() {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.name("email")).sendKeys("Gabcde.Stuvwx");
        driver.findElement(By.name("pass")).sendKeys("Abc123");
        driver.findElement(By.name("login")).click();
    }

    @Then("^I see error on page$")
    public void i_see_error_on_page() {
        // Write code here that turns the phrase above into concrete actions
        String S1 = driver.findElement(By.className("_9ay7")).getText();
        S1.contains("entered is incorrect");
    }

    @When("^I connect to \"([^\"]*)\" link$")
    public void i_connect_to_link(String Web2) {
        // Write code here that turns the phrase above into concrete actions
        driver.get(Web2);
    }

    @Then("^I see Rediff Page$")
    public void i_see_Rediff_Page() {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(driver.getTitle().contains("Rediff"));
    }

    @Then("^when I pass on Sign-in link$")
    public void when_I_pass_on_Sign_in_link() {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.className("signin")).click();
    }

    @Then("^I see Sign-in page$")
    public void i_see_Sign_in_page() {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(driver.getCurrentUrl().contains("login"));
    }

}
