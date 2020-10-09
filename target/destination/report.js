$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Facebook.feature");
formatter.feature({
  "line": 1,
  "name": "Facbook",
  "description": "",
  "id": "facbook",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5680543705,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Facebook Login",
  "description": "",
  "id": "facbook;facebook-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": ": I am a chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I connect to \"https://en-gb.facebook.com\" page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I see login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "when I pass on icorrect details",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I see error on page",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook.i_am_a_chrome_user()"
});
formatter.result({
  "duration": 407248472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://en-gb.facebook.com",
      "offset": 14
    }
  ],
  "location": "Facebook.i_connect_to_page(String)"
});
formatter.result({
  "duration": 2964438739,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.i_see_login_Page()"
});
formatter.result({
  "duration": 18381374,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.when_I_pass_on_icorrect_details()"
});
formatter.result({
  "duration": 1409469217,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton value\u003d\"1\" class\u003d\"_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy\" name\u003d\"login\" data-testid\u003d\"royal_login_button\" type\u003d\"submit\" id\u003d\"u_0_b\"\u003e...\u003c/button\u003e is not clickable at point (888, 300). Other element would receive the click: \u003cdiv class\u003d\"_3ixn\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Gangeshs-Air.broadband\u0027, ip: \u0027fe80:0:0:0:1061:69b4:f409:9d28%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002711.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/4t/ndh04fx92ks...}, goog:chromeOptions: {debuggerAddress: localhost:60814}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e2514a3bc4e77cd3110a7c58356e6658\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat StepDefinitions.Facebook.when_I_pass_on_icorrect_details(Facebook.java:82)\n\tat ✽.And when I pass on icorrect details(Facebook.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "Facebook.i_see_error_on_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 187984245,
  "status": "passed"
});
});