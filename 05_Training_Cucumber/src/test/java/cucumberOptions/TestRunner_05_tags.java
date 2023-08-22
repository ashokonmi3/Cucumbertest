package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//@RunWith(Cucumber.class)
//@CucumberOptions(features = "src/test/java/features/05_tag.feature", tags = "@WebTest", glue = "stepDefinations")
//public class TestRunner_05_tags {
//
//}

// =====================
//@RunWith(Cucumber.class)
//@CucumberOptions(features = "src/test/java/features/05_tag.feature", tags = "~@WebTest", glue = "stepDefinations")
//public class TestRunner_05_tags {
//
//}
// ===================
// and operator
//@RunWith(Cucumber.class)
//@CucumberOptions(features = "src/test/java/features/05_tag.feature", tags = { "@WebTest",
//		"@MobileTest" }, glue = "stepDefinations")
//public class TestRunner_05_tags {
//
//}
// ===================
// Or tag
@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features/05_tag.feature", tags = {
		"@WebTest,@MobileTest" }, glue = "stepDefinations")
public class TestRunner_05_tags {

}