$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/Features/LogIn.feature");
formatter.feature({
  "name": "Log in",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login should not be able to log in with the invalid credentials",
  "description": "  neerajneeraj@neo.com password1234",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on Log in button",
  "keyword": "When "
});
formatter.step({
  "name": "enters invalid \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should not be able to log in with invalid credentials",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "ababc@yahoo.com",
        "password"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "ababc@yahoo.com",
        "password1234"
      ]
    },
    {
      "cells": [
        "neerajneeraj@neo.com",
        "password"
      ]
    },
    {
      "cells": [
        "ababc@yahoo.com",
        ""
      ]
    },
    {
      "cells": [
        "",
        "password1234"
      ]
    },
    {
      "cells": [
        "",
        "password"
      ]
    },
    {
      "cells": [
        "ababc@yahoo.com",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login should not be able to log in with the invalid credentials",
  "description": "  neerajneeraj@neo.com password1234",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user clicks on Log in button",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters invalid \"ababc@yahoo.com\" and \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.entersInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in with invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userShouldNotBeAbleToLogInWithInvalidCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login should not be able to log in with the invalid credentials",
  "description": "  neerajneeraj@neo.com password1234",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user clicks on Log in button",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters invalid \"\" and \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.entersInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in with invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userShouldNotBeAbleToLogInWithInvalidCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login should not be able to log in with the invalid credentials",
  "description": "  neerajneeraj@neo.com password1234",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user clicks on Log in button",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters invalid \"ababc@yahoo.com\" and \"password1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.entersInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in with invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userShouldNotBeAbleToLogInWithInvalidCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login should not be able to log in with the invalid credentials",
  "description": "  neerajneeraj@neo.com password1234",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user clicks on Log in button",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters invalid \"neerajneeraj@neo.com\" and \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.entersInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in with invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userShouldNotBeAbleToLogInWithInvalidCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login should not be able to log in with the invalid credentials",
  "description": "  neerajneeraj@neo.com password1234",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user clicks on Log in button",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters invalid \"ababc@yahoo.com\" and \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.entersInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in with invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userShouldNotBeAbleToLogInWithInvalidCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login should not be able to log in with the invalid credentials",
  "description": "  neerajneeraj@neo.com password1234",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user clicks on Log in button",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters invalid \"\" and \"password1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.entersInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in with invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userShouldNotBeAbleToLogInWithInvalidCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login should not be able to log in with the invalid credentials",
  "description": "  neerajneeraj@neo.com password1234",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user clicks on Log in button",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters invalid \"\" and \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.entersInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in with invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userShouldNotBeAbleToLogInWithInvalidCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login should not be able to log in with the invalid credentials",
  "description": "  neerajneeraj@neo.com password1234",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user clicks on Log in button",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters invalid \"ababc@yahoo.com\" and \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.entersInvalidAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to log in with invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userShouldNotBeAbleToLogInWithInvalidCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});