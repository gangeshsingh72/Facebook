
package StepDefinitions;

import Utilities.ConfigFileReader;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.Arrays;

public class Hooks {

    public static WebDriver driver;

    // What is WebDriverManager ????

    @Before
    public void beforeScenario() {

        //-------  Using the settings from Config File Reader and Config.properties file ---------//
        ConfigFileReader config = new ConfigFileReader();
        System.setProperty("webdriver.chrome.driver", config.getChromeDriver());
        //  System.setProperty("webdriver.chrome.driver", "src/test/java/utilities/chromedriver");

        ChromeOptions options = new ChromeOptions();
        options.addArguments("start-maximized");   // Maxamise the google chrome window
        options.addArguments("disable-infobars");  // disable info bars
        options.setExperimentalOption("excludeSwitches",
                Arrays.asList("disable-popup-blocking"));
        //  options.addArguments("incognito");    // for launching in incognito mode
        // options.addArguments("headless");      // for headless mode

        driver = new ChromeDriver(options);

        //-------  Using URL from Config File Reader and Config.properties file ---------//
        driver.get(config.getApplicationUrl());
        // driver.get("https://google.co.uk");

        System.out.println("This will print before every scenario");
    }

    @After
    public void afterScenario() {
        driver.quit();
        System.out.println("This will print after every scenario");
    }

}

