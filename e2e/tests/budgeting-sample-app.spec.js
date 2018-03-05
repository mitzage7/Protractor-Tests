const BudgetingAppPage = require('../page-objects/budgeting-sample-app.po.js');

describe('angularjs homepage', function () {
    browser.ignoreSynchronization = true;
    const budgetAppPage = new BudgetingAppPage();


    it('should check both menu buttons are working and the URL of the page is updated accordingly.', function () {
        browser.get('http://localhost:3000/budget');
        budgetAppPage.reportsBtn.click().then(function () {
            expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/reports/inflow-outflow");
        });
        budgetAppPage.budgetBtn.click().then(function () {
            expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/budget");
        });
    });

    it('should check the working balance amount and widgets after adding a new valid entry in the table', function() {
        browser.get('http://localhost:3000/budget');
        const amountValue = 1000;
        const totalInflowTextBefore = budgetAppPage.totalInflowText.getText().then(function(totalInflowTextBefore) {
            const totalInflowFloatBefore = budgetAppPage.convertFromTextToFloat(totalInflowTextBefore);
            const totalOutflowTextBefore = budgetAppPage.totalOutflowText.getText().then(function(totalOutflowTextBefore) {
                const totalOutflowFloatBefore = budgetAppPage.convertFromTextToFloat(totalOutflowTextBefore);
                const workingBalanceTextBefore = budgetAppPage.workingBalaceText.getText().then(function(workingBalanceTextBefore) {
                    const workingBalanceValueFloatBefore = budgetAppPage.convertFromTextToFloat(workingBalanceTextBefore);
                        
                    budgetAppPage.reportsBtn.click();
                    expect(budgetAppPage.reportsList.getText()).not.toContain("School $1,000.00");
                    budgetAppPage.spendingByCategoryTab.click();
                    expect(budgetAppPage.spendingByCategoryTabList.getText()).not.toContain("School $1,000.00");
                    budgetAppPage.inflowOutflowTab.click();
                        
                    const totalInflowTextReportsBefore = budgetAppPage.totalInflowReportsPage.getText().then(function(totalInflowTextReportsBefore) {
                        const totalInflowFloatReportsBefore = budgetAppPage.convertFromTextToFloat(totalInflowTextReportsBefore);
                        const totalOutflowTextReportsBefore = budgetAppPage.totalOutflowReportsPage.getText().then(function(totalOutflowTextReportsBefore) {
                            const totalOutflowFloatReportsBefore = budgetAppPage.convertFromTextToFloat(totalOutflowTextReportsBefore);
                                
                            budgetAppPage.budgetBtn.click();
                            budgetAppPage.addNewEntry("test", amountValue);
                            expect(budgetAppPage.newCategory.getText()).toMatch("School");
                            expect(budgetAppPage.newDescription.getText()).toMatch("test");
                            expect(budgetAppPage.newAmountValue.getText()).toEqual("-$1,000.00");
        
                            const totalInflowTextAfterText = budgetAppPage.totalInflowTextAfter.getText().then(function(totalInflowTextAfterText) {
                                const totalInflowFloatAfter = budgetAppPage.convertFromTextToFloat(totalInflowTextAfterText); 
                                expect(totalInflowFloatAfter).toEqual(totalInflowFloatBefore);
                                const totalOutflowTextAfterText = budgetAppPage.totalOutflowTextAfter.getText().then(function(totalOutflowTextAfterText) {
                                    const totalOutflowFloatAfter = budgetAppPage.convertFromTextToFloat(totalOutflowTextAfterText);
                                    const totalOutflowFloatValue = totalOutflowFloatBefore + amountValue;
                                    expect(totalOutflowFloatAfter).toEqual(totalOutflowFloatValue);
                                    const workingBalanceTextAfterText = budgetAppPage.workingBalaceTextAfter.getText().then(function(workingBalanceTextAfterText) {
                                        const workingBalanceValueFloatAfter = budgetAppPage.convertFromTextToFloat(workingBalanceTextAfterText);
                                        const workingBalanceValue = workingBalanceValueFloatBefore - amountValue;
                                        const workingBalanceValueInt = parseInt(workingBalanceValue);
                                        const workingBalanceValueIntAfter = parseInt(workingBalanceValueFloatAfter);
                                        expect(workingBalanceValueIntAfter).toEqual(workingBalanceValueInt);
                                        
                                        budgetAppPage.reportsBtn.click();
                                        const totalInflowTextReportsAfter = budgetAppPage.totalInflowReportsPageAfter.getText().then(function(totalInflowTextReportsAfter) {
                                            const totalInflowFloatReportsAfter = budgetAppPage.convertFromTextToFloat(totalInflowTextReportsAfter);
                                            expect(totalInflowFloatReportsAfter).toEqual(totalInflowFloatReportsBefore);
                                            const totalOutflowTextReportsAfter = budgetAppPage.totalOutflowReportsPageAfter.getText().then(function(totalOutflowTextReportsAfter) {
                                                    const totalOutflowFloatReportsAfter = budgetAppPage.convertFromTextToFloat(totalOutflowTextReportsAfter);
                                                    const totalOutflowFloatReportsValue = totalOutflowFloatReportsBefore + amountValue;
                                                    expect(totalOutflowFloatReportsAfter).toEqual(totalOutflowFloatReportsValue);
                                                    expect(budgetAppPage.reportsList.getText()).toContain("School $1,000.00");
                                                
                                                    budgetAppPage.spendingByCategoryTab.click();
                                                    expect(budgetAppPage.spendingByCategoryTabList.getText()).toContain("School $1,000.00");
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    
    it('should check the working balance amount and widgets after adding an invalid entry in the table', function() {
        browser.get('http://localhost:3000/budget');
        const amountValue = -1000;
        const totalInflowTextBefore = budgetAppPage.totalInflowText.getText().then(function(totalInflowTextBefore) {
            const totalInflowFloatBefore = budgetAppPage.convertFromTextToFloat(totalInflowTextBefore);
            const totalOutflowTextBefore = budgetAppPage.totalOutflowText.getText().then(function(totalOutflowTextBefore) {
                const totalOutflowFloatBefore = budgetAppPage.convertFromTextToFloat(totalOutflowTextBefore);
                const workingBalanceTextBefore = budgetAppPage.workingBalaceText.getText().then(function(workingBalanceTextBefore) {
                    const workingBalanceValueFloatBefore = budgetAppPage.convertFromTextToFloat(workingBalanceTextBefore);
                        
                    budgetAppPage.reportsBtn.click();
                    expect(budgetAppPage.reportsList.getText()).not.toContain("School $-1,000.00");
                    budgetAppPage.spendingByCategoryTab.click();
                    expect(budgetAppPage.spendingByCategoryTabList.getText()).not.toContain("School $-1,000.00");
                    budgetAppPage.inflowOutflowTab.click();
                        
                    const totalInflowTextReportsBefore = budgetAppPage.totalInflowReportsPage.getText().then(function(totalInflowTextReportsBefore) {
                        const totalInflowFloatReportsBefore = budgetAppPage.convertFromTextToFloat(totalInflowTextReportsBefore);
                        const totalOutflowTextReportsBefore = budgetAppPage.totalOutflowReportsPage.getText().then(function(totalOutflowTextReportsBefore) {
                            const totalOutflowFloatReportsBefore = budgetAppPage.convertFromTextToFloat(totalOutflowTextReportsBefore);
                                
                            budgetAppPage.budgetBtn.click();
                            budgetAppPage.addNewEntry("test", amountValue);
                            expect(budgetAppPage.newCategory.getText()).toMatch("School");
                            expect(budgetAppPage.newDescription.getText()).toMatch("test");
                            expect(budgetAppPage.newAmountValue.getText()).toEqual("+$1,000.00");
        
                            const totalInflowTextAfterText = budgetAppPage.totalInflowTextAfter.getText().then(function(totalInflowTextAfterText) {
                                const totalInflowFloatAfter = budgetAppPage.convertFromTextToFloat(totalInflowTextAfterText); 
                                expect(totalInflowFloatAfter).toEqual(totalInflowFloatBefore);
                                const totalOutflowTextAfterText = budgetAppPage.totalOutflowTextAfter.getText().then(function(totalOutflowTextAfterText) {
                                    const totalOutflowFloatAfter = budgetAppPage.convertFromTextToFloat(totalOutflowTextAfterText);
                                    const totalOutflowFloatValue = totalOutflowFloatBefore + amountValue;
                                    expect(totalOutflowFloatAfter).toEqual(totalOutflowFloatValue);
                                    const workingBalanceTextAfterText = budgetAppPage.workingBalaceTextAfter.getText().then(function(workingBalanceTextAfterText) {
                                        const workingBalanceValueFloatAfter = budgetAppPage.convertFromTextToFloat(workingBalanceTextAfterText);
                                        const workingBalanceValue = workingBalanceValueFloatBefore - amountValue;
                                        const workingBalanceValueInt = parseInt(workingBalanceValue);
                                        const workingBalanceValueIntAfter = parseInt(workingBalanceValueFloatAfter);
                                        expect(workingBalanceValueIntAfter).toEqual(workingBalanceValueInt);
                                        
                                        budgetAppPage.reportsBtn.click();
                                        const totalInflowTextReportsAfter = budgetAppPage.totalInflowReportsPageAfter.getText().then(function(totalInflowTextReportsAfter) {
                                            const totalInflowFloatReportsAfter = budgetAppPage.convertFromTextToFloat(totalInflowTextReportsAfter);
                                            expect(totalInflowFloatReportsAfter).toEqual(totalInflowFloatReportsBefore);
                                            const totalOutflowTextReportsAfter = budgetAppPage.totalOutflowReportsPageAfter.getText().then(function(totalOutflowTextReportsAfter) {
                                                    const totalOutflowFloatReportsAfter = budgetAppPage.convertFromTextToFloat(totalOutflowTextReportsAfter);
                                                    const totalOutflowFloatReportsValue = totalOutflowFloatReportsBefore + amountValue;
                                                    expect(totalOutflowFloatReportsAfter).toEqual(totalOutflowFloatReportsValue);
                                                    expect(budgetAppPage.reportsList.getText()).toContain("School $-1,000.00");
                                                
                                                    budgetAppPage.spendingByCategoryTab.click();
                                                    expect(budgetAppPage.spendingByCategoryTabList.getText()).toContain("-School $1,000.00");
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});