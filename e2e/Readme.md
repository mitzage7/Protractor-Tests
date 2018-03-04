Budgeting Sample App Test Plan

The designed application contains two pages: Budget and Reports. 

The Budget page contains a table with the categories the user can add in order to track his budget. Also an option of income can be selected so that the user can track his salary or other forms of income. The user can add the inflow categories from the dropdown list which contains several categories. At the bottom of the page there are some labels with calculate the total inflow and outflow that was added and that represents the working balance of the account.

The Reports page cotains two tabs: Inflow vs. Outflow and Spending by Category, which represent a detailed chart of each category of inflow that the user added in the previous page, witch the correct amount.

The goal of this test plan is to provide an efficient way of testing the app described above. Tests will be performed both manually and autoamed, using the end-2-end testing framework Protractor. Protractor runs tests against your application running in a real browser, interacting with it as a user would. It is built on top of WebDriverJS, which uses native events and browser-specific drivers to interact with your application as a user would.

In order to efficiently test the app, we need to identify the test items and flows that should be performed. The scenarios I've identified in order to test are the following:
- Check both menu buttons are working and the URL of the page is updated accordingly.
- When accessing the app for the first time, check that the amount of inflow and outflow is correctly calculated.
- Check that user can select each type of category and add it in the table 
- Description of the category item should not be mandatory
- Amount value should be mandatory
- Amount value should always be positive, otherwise specified in the app documentation.
- When adding a new category in the table, the working balance should be updated correctly.
- When adding a new category or a new value for an existing category the Reports page should be updated accordingly with the new value se in both tabs.

The following scenarios will be in scope of automation testing with Protractor:

1. Check both menu buttons are working and the URL of the page is updated accordingly.
2. Add a new valid entry in the table and check that the Working Balance amount is updated alongside the Reports page widgets.
3. Add a new entry in the table with negative amount and check the Working Balance amound and Reports page widgets.

Deliverables: a report of 3 tests, 2 that pass and one that fails because of a bug in the app.

How to run tests:

1. Download package from git repo: https://github.com/mitzage7/Protractor-Tests.git
2. Open console, go to project file and run first webdriver-manager update. This needs to be run only once, in order to update the drivers.
2. Run npm test. The 3 designed tests will run, 2 will pass, 1 will fail because of a bug in the app.

The e2e folder structure is:
- conf.js file - represents the global configuration file
- this readme.md file
- htmlReport.html - report file with all 3 tests
- screenshots folder - screenshot taken of the app after every test run
- page-objects folder -> contains a js file with the page objects for the tests.
- tests folder -> contains a js file with the 3 tests

Module used: 
 SpecReporter - displayng the name of the tests after running them.
 Jasmine2HtmlReporter - generates report html file.
 
 All required modules have been imported in the package.json file and the test variable has been overwritten with the path to the protractor tests.
