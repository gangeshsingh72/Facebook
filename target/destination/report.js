$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Facebook.feature");
formatter.feature({
  "line": 1,
  "name": "Facbook",
  "description": "",
  "id": "facbook",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4030671038,
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
  "duration": 242400070,
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
  "duration": 2641192518,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.i_see_login_Page()"
});
formatter.result({
  "duration": 11017098,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.when_I_pass_on_icorrect_details()"
});
formatter.result({
  "duration": 293401770,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.i_see_error_on_page()"
});
formatter.result({
  "duration": 10589613317,
  "status": "passed"
});
formatter.after({
  "duration": 101172875,
  "status": "passed"
});
});