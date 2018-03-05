'use strict';

class BudgetingAppPage {
    constructor() {
        this.reportsBtn = element(by.linkText("Reports"));
        this.budgetBtn = element(by.linkText("Budget"));
        this.totalInflowText = element.all(by.css(".sG1fB._1yrus")).get(0);
        this.totalOutflowText = element(by.css(".sG1fB._15b6X"));
        this.workingBalaceText = element.all(by.css(".sG1fB._1yrus")).get(1);
        this.dropdownElmSelectSchool = element(by.cssContainingText('option', 'School'));
        this.descriptionInputField = element(by.name("description"));
        this.valueInputField = element(by.name("value"));
        this.addBtn = element(by.css("[type=submit]"));
        this.totalInflowReportsPage = element.all(by.css("._1UVu9")).get(0);
        this.totalOutflowReportsPage = element.all(by.css("._1UVu9")).get(1);
        this.newCategory = element.all(by.css("._3-t-g")).get(18);
        this.newDescription = element.all(by.css("._3-t-g")).get(19);
        this.newAmountValue = element.all(by.css("._3-t-g")).get(20);
        this.totalInflowTextAfter = element.all(by.css(".sG1fB._1yrus")).get(0);
        this.totalOutflowTextAfter = element(by.css(".sG1fB._15b6X"));
        this.workingBalaceTextAfter = element.all(by.css(".sG1fB._1yrus")).get(1);
        this.totalInflowReportsPageAfter = element.all(by.css("._1UVu9")).get(0);
        this.totalOutflowReportsPageAfter = element.all(by.css("._1UVu9")).get(1);
        this.reportsList = element(by.css("._38CF-._2ItMa"));
        this.inflowOutflowTab = element.all(by.css(".PoLct")).get(0);
        this.spendingByCategoryTab = element.all(by.css(".PoLct")).get(1);
        this.spendingByCategoryTabList = element(by.css("._38CF-"));
    }
    
    addNewEntry(description, amount){
        this.dropdownElmSelectSchool.click();
        this.descriptionInputField.sendKeys(description);
        this.valueInputField.sendKeys(amount);
        this.addBtn.click();
    }
    
    convertFromTextToFloat(inputText) {
            const text1 = inputText.substring(1, 2);
            const text2 = inputText.substring(3, 9);
            const textConcatenated = text1 + text2;
            return parseFloat(textConcatenated);
        }
}

module.exports = BudgetingAppPage;