$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01_First_Feature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 20,
      "value": "#@WebTest"
    }
  ],
  "line": 21,
  "name": "List of scenarios.",
  "description": "",
  "id": "list-of-scenarios.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "Home page default login",
  "description": "",
  "id": "list-of-scenarios.;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "validate the browser",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User login into application with username and password",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 263678900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.validate_the_browser()"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.browser_is_triggered()"
});
formatter.result({
  "duration": 101100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.check_if_browser_is_started()"
});
formatter.result({
  "duration": 118000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.user_login_into_application_with_username_and_password()"
});
formatter.result({
  "duration": 71500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 100800,
  "status": "passed"
});
formatter.uri("02_Regex.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 309700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 78000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 2757900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 102800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 154700,
  "status": "passed"
});
formatter.after({
  "duration": 102100,
  "status": "passed"
});
formatter.before({
  "duration": 135700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User login into application with \"john\" and password \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 107500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 34
    },
    {
      "val": "4321",
      "offset": 54
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 310700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 77100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 119600,
  "status": "passed"
});
formatter.after({
  "duration": 79600,
  "status": "passed"
});
formatter.uri("03_DataDriven.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 118200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User sign up with following details",
  "rows": [
    {
      "cells": [
        "jenny",
        "abcd",
        "john@abcd.com",
        "Australia",
        "3242353"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 113500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 1929800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 68600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 132800,
  "status": "passed"
});
formatter.after({
  "duration": 60900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User login in to application with \u003cUsername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "application-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ],
      "line": 21,
      "id": "application-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "user1",
        "pass1"
      ],
      "line": 22,
      "id": "application-login;home-page-default-login;;2"
    },
    {
      "cells": [
        "user2",
        "pass2"
      ],
      "line": 23,
      "id": "application-login;home-page-default-login;;3"
    },
    {
      "cells": [
        "user3",
        "pass3"
      ],
      "line": 24,
      "id": "application-login;home-page-default-login;;4"
    },
    {
      "cells": [
        "user4",
        "pass4"
      ],
      "line": 25,
      "id": "application-login;home-page-default-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 303300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User login in to application with user1 and password pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 70400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 34
    },
    {
      "val": "pass1",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 132800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 44300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 118700,
  "status": "passed"
});
formatter.after({
  "duration": 49300,
  "status": "passed"
});
formatter.before({
  "duration": 69400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User login in to application with user2 and password pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 140200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 34
    },
    {
      "val": "pass2",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 181300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 86500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 151400,
  "status": "passed"
});
formatter.after({
  "duration": 59900,
  "status": "passed"
});
formatter.before({
  "duration": 82400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User login in to application with user3 and password pass3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 74300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user3",
      "offset": 34
    },
    {
      "val": "pass3",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 281700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 65000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 124500,
  "status": "passed"
});
formatter.after({
  "duration": 64000,
  "status": "passed"
});
formatter.before({
  "duration": 86400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User login in to application with user4 and password pass4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 79900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user4",
      "offset": 34
    },
    {
      "val": "pass4",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_and_password(String,String)"
});
formatter.result({
  "duration": 140300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 49500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 91800,
  "status": "passed"
});
formatter.after({
  "duration": 52900,
  "status": "passed"
});
formatter.uri("04_Background.feature");
formatter.feature({
  "line": 1,
  "name": "Portal Login",
  "description": "",
  "id": "portal-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "# should be always on top and will be executed before every scenerio",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions_01.validate_the_browser()"
});
formatter.result({
  "duration": 73200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.browser_is_triggered()"
});
formatter.result({
  "duration": 68300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.check_if_browser_is_started()"
});
formatter.result({
  "duration": 55600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 102700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 146400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 48100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 111100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "# should be always on top and will be executed before every scenerio",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "check if browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions_01.validate_the_browser()"
});
formatter.result({
  "duration": 205500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.browser_is_triggered()"
});
formatter.result({
  "duration": 74800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.check_if_browser_is_started()"
});
formatter.result({
  "duration": 66400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Home page login",
  "description": "",
  "id": "portal-login;home-page-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 50100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 166000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 58000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 122700,
  "status": "passed"
});
formatter.uri("05_tag.feature");
formatter.feature({
  "line": 1,
  "name": "Portal Login",
  "description": "",
  "id": "portal-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 97900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "# hook and background cant be used together@WebTest"
    }
  ],
  "line": 5,
  "name": "Home page default login for tagging @MobileTest",
  "description": "",
  "id": "portal-login;home-page-default-login-for-tagging-@mobiletest",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 92800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 167600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 58300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 125200,
  "status": "passed"
});
formatter.after({
  "duration": 65100,
  "status": "passed"
});
formatter.before({
  "duration": 97000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Home page default login first test for tagging @WebTest",
  "description": "",
  "id": "portal-login;home-page-default-login-first-test-for-tagging-@webtest",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 110200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 126600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 49400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 90200,
  "status": "passed"
});
formatter.after({
  "duration": 40900,
  "status": "passed"
});
formatter.before({
  "duration": 84800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Contact page default login for tagging @WebTest",
  "description": "",
  "id": "portal-login;contact-page-default-login-for-tagging-@webtest",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 72100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 144600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 56300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 201400,
  "status": "passed"
});
formatter.after({
  "duration": 58100,
  "status": "passed"
});
formatter.before({
  "duration": 90000,
  "status": "passed"
});
formatter.before({
  "duration": 57700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Contact page default login for both tag @WebTest @MobileTest",
  "description": "",
  "id": "portal-login;contact-page-default-login-for-both-tag-@webtest-@mobiletest",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@WebTest"
    },
    {
      "line": 25,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 163400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 172300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 63300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 126600,
  "status": "passed"
});
formatter.after({
  "duration": 81500,
  "status": "passed"
});
formatter.after({
  "duration": 79100,
  "status": "passed"
});
formatter.uri("06_hook.feature");
formatter.feature({
  "line": 1,
  "name": "Portal Login",
  "description": "",
  "id": "portal-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 73100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "# hook and background cant be used together@WebTest"
    }
  ],
  "line": 4,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 105600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 160400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 44300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 177800,
  "status": "passed"
});
formatter.after({
  "duration": 74000,
  "status": "passed"
});
formatter.before({
  "duration": 89400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 1342800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 198900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 765500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 140300,
  "status": "passed"
});
formatter.after({
  "duration": 61200,
  "status": "passed"
});
formatter.uri("08_cuc_options.feature");
formatter.feature({
  "line": 1,
  "name": "Portal Login",
  "description": "",
  "id": "portal-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 137100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "# hook and background cant be used together@WebTest"
    }
  ],
  "line": 4,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 110600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 207300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 68800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 870600,
  "status": "passed"
});
formatter.after({
  "duration": 42800,
  "status": "passed"
});
formatter.before({
  "duration": 63700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_01.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 68300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 53
    }
  ],
  "location": "StepDefinitions_01.user_login_into_application_with_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 115900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_01.home_page_is_populated()"
});
formatter.result({
  "duration": 38000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinitions_01.cards_displayed_are(String)"
});
formatter.result({
  "duration": 122100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 44100,
  "status": "passed"
});
});