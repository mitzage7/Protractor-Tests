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
            const totalInflowText1Before = totalInflowTextBefore.substring(1, 2);
            const totalInflowText2Before = totalInflowTextBefore.substring(3, 9);
            const totalInflowTextAllBefore = totalInflowText1Before + totalInflowText2Before;
            const totalInflowFloatBefore = parseFloat(totalInflowTextAllBefore);
        
            const totalOutflowTextBefore = budgetAppPage.totalOutflowText.getText().then(function(totalOutflowTextBefore) {
                const totalOutflowText1Before = totalOutflowTextBefore.substring(1, 2);
                const totalOutflowText2Before = totalOutflowTextBefore.substring(3, 9);
                const totalOutflowTextAllBefore = totalOutflowText1Before + totalOutflowText2Before;
                const totalOutflowFloatBefore = parseFloat(totalOutflowTextAllBefore);
                
                const workingBalanceTextBefore = budgetAppPage.workingBalaceText.getText().then(function(workingBalanceTextBefore) {
                    const workingBalanceValueText1Before = workingBalanceTextBefore.substring(1, 2);
                    const workingBalanceValueText2Before = workingBalanceTextBefore.substring(3, 9);
                    const workingBalanceValueAllTextBefore = workingBalanceValueText1Before + workingBalanceValueText2Before;
                    const workingBalanceValueFloatBefore = parseFloat(workingBalanceValueAllTextBefore);  
        
                    budgetAppPage.reportsBtn.click();
                    expect(budgetAppPage.reportsList.getText()).not.toContain("School $1,000.00");
                    budgetAppPage.spendingByCategoryTab.click();
                    expect(budgetAppPage.spendingByCategoryTabList.getText()).not.toContain("School $1,000.00");
                    budgetAppPage.inflowOutflowTab.click();
        
                    const totalInflowTextReportsBefore = budgetAppPage.totalInflowReportsPage.getText().then(function(totalInflowTextReportsBefore) {
                        const totalInflowText1ReportsBefore = totalInflowTextReportsBefore.substring(1, 2);
                        const totalInflowText2ReportsBefore = totalInflowTextReportsBefore.substring(3, 9);
                        const totalInflowTextAllReportsBefore = totalInflowText1ReportsBefore + totalInflowText2ReportsBefore;
                        const totalInflowFloatReportsBefore = parseFloat(totalInflowTextAllReportsBefore);
        
                        const totalOutflowTextReportsBefore = budgetAppPage.totalOutflowReportsPage.getText().then(function(totalOutflowTextReportsBefore) {
                            const totalOutflowText1ReportsBefore = totalOutflowTextReportsBefore.substring(1, 2);
                            const totalOutflowText2ReportsBefore = totalOutflowTextReportsBefore.substring(3, 9);
                            const totalOutflowTextAllReportsBefore = totalOutflowText1ReportsBefore + totalOutflowText2ReportsBefore;
                            const totalOutflowFloatReportsBefore = parseFloat(totalOutflowTextAllReportsBefore);
        
                            budgetAppPage.budgetBtn.click();
                            budgetAppPage.addNewEntry("test", amountValue);
        
                            expect(budgetAppPage.newCategory.getText()).toMatch("School");
                            expect(budgetAppPage.newDescription.getText()).toMatch("test");
                            expect(budgetAppPage.newAmountValue.getText()).toEqual("-$1,000.00");
        
                            const totalInflowTextAfterText = budgetAppPage.totalInflowTextAfter.getText().then(function(totalInflowTextAfterText) {
                                const totalInflowText1After = totalInflowTextAfterText.substring(1, 2);
                                const totalInflowText2After = totalInflowTextAfterText.substring(3, 9);
                                const totalInflowTextAllAfter = totalInflowText1After + totalInflowText2After;
                                const totalInflowFloatAfter = parseFloat(totalInflowTextAllAfter);
                                expect(totalInflowFloatAfter).toEqual(totalInflowFloatBefore);
                                
                                const totalOutflowTextAfterText = budgetAppPage.totalOutflowTextAfter.getText().then(function(totalOutflowTextAfterText) {
                                    const totalOutflowText1After = totalOutflowTextAfterText.substring(1, 2);
                                    const totalOutflowText2After = totalOutflowTextAfterText.substring(3, 9);
                                    const totalOutflowTextAllAfter = totalOutflowText1After + totalOutflowText2After;
                                    const totalOutflowFloatAfter = parseFloat(totalOutflowTextAllAfter);
                                    const totalOutflowFloatValue = totalOutflowFloatBefore + amountValue;
                                    expect(totalOutflowFloatAfter).toEqual(totalOutflowFloatValue);
                                    
                                    const workingBalanceTextAfterText = budgetAppPage.workingBalaceTextAfter.getText().then(function(workingBalanceTextAfterText) {
                                        const workingBalanceValueText1After = workingBalanceTextAfterText.substring(1, 2);
                                        const workingBalanceValueText2After = workingBalanceTextAfterText.substring(3, 9);
                                        const workingBalanceValueAllTextAfter = workingBalanceValueText1After + workingBalanceValueText2After;
                                        const workingBalanceValueFloatAfter = parseFloat(workingBalanceValueAllTextAfter);
                                        const workingBalanceValue = workingBalanceValueFloatBefore - amountValue;
                                        
                                        const workingBalanceValueInt = parseInt(workingBalanceValue);
                                        const workingBalanceValueIntAfter = parseInt(workingBalanceValueFloatAfter);
                                        expect(workingBalanceValueIntAfter).toEqual(workingBalanceValueInt);
                                        
                                        budgetAppPage.reportsBtn.click();
                                        const totalInflowTextReportsAfter = budgetAppPage.totalInflowReportsPageAfter.getText().then(function(totalInflowTextReportsAfter) {
                                            const totalInflowText1ReportsAfter = totalInflowTextReportsAfter.substring(1, 2);
                                            const totalInflowText2ReportsAfter = totalInflowTextReportsAfter.substring(3, 9);
                                            const totalInflowTextAllReportsAfter = totalInflowText1ReportsAfter + totalInflowText2ReportsAfter;
                                            const totalInflowFloatReportsAfter = parseFloat(totalInflowTextAllReportsAfter);
                                            expect(totalInflowFloatReportsAfter).toEqual(totalInflowFloatReportsBefore);
                                            
                                            const totalOutflowTextReportsAfter = budgetAppPage.totalOutflowReportsPageAfter.getText().then(function(totalOutflowTextReportsAfter) {
                                                const totalOutflowText1ReportsAfter = totalOutflowTextReportsAfter.substring(1, 2);
                                                const totalOutflowText2ReportsAfter = totalOutflowTextReportsAfter.substring(3, 9);
                                                const totalOutflowTextAllReportsAfter = totalOutflowText1ReportsAfter + totalOutflowText2ReportsAfter;
                                                const totalOutflowFloatReportsAfter = parseFloat(totalOutflowTextAllReportsAfter);
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
            const totalInflowText1Before = totalInflowTextBefore.substring(1, 2);
            const totalInflowText2Before = totalInflowTextBefore.substring(3, 9);
            const totalInflowTextAllBefore = totalInflowText1Before + totalInflowText2Before;
            const totalInflowFloatBefore = parseFloat(totalInflowTextAllBefore);
        
            const totalOutflowTextBefore = budgetAppPage.totalOutflowText.getText().then(function(totalOutflowTextBefore) {
                const totalOutflowText1Before = totalOutflowTextBefore.substring(1, 2);
                const totalOutflowText2Before = totalOutflowTextBefore.substring(3, 9);
                const totalOutflowTextAllBefore = totalOutflowText1Before + totalOutflowText2Before;
                const totalOutflowFloatBefore = parseFloat(totalOutflowTextAllBefore);
                
                const workingBalanceTextBefore = budgetAppPage.workingBalaceText.getText().then(function(workingBalanceTextBefore) {
                    const workingBalanceValueText1Before = workingBalanceTextBefore.substring(1, 2);
                    const workingBalanceValueText2Before = workingBalanceTextBefore.substring(3, 9);
                    const workingBalanceValueAllTextBefore = workingBalanceValueText1Before + workingBalanceValueText2Before;
                    const workingBalanceValueFloatBefore = parseFloat(workingBalanceValueAllTextBefore);  
        
                    budgetAppPage.reportsBtn.click();
                    expect(budgetAppPage.reportsList.getText()).not.toContain("School $-1,000.00");
                    budgetAppPage.spendingByCategoryTab.click();
                    expect(budgetAppPage.spendingByCategoryTabList.getText()).not.toContain("School $-1,000.00");
                    budgetAppPage.inflowOutflowTab.click();
        
                    const totalInflowTextReportsBefore = budgetAppPage.totalInflowReportsPage.getText().then(function(totalInflowTextReportsBefore) {
                        const totalInflowText1ReportsBefore = totalInflowTextReportsBefore.substring(1, 2);
                        const totalInflowText2ReportsBefore = totalInflowTextReportsBefore.substring(3, 9);
                        const totalInflowTextAllReportsBefore = totalInflowText1ReportsBefore + totalInflowText2ReportsBefore;
                        const totalInflowFloatReportsBefore = parseFloat(totalInflowTextAllReportsBefore);
        
                        const totalOutflowTextReportsBefore = budgetAppPage.totalOutflowReportsPage.getText().then(function(totalOutflowTextReportsBefore) {
                            const totalOutflowText1ReportsBefore = totalOutflowTextReportsBefore.substring(1, 2);
                            const totalOutflowText2ReportsBefore = totalOutflowTextReportsBefore.substring(3, 9);
                            const totalOutflowTextAllReportsBefore = totalOutflowText1ReportsBefore + totalOutflowText2ReportsBefore;
                            const totalOutflowFloatReportsBefore = parseFloat(totalOutflowTextAllReportsBefore);
        
                            budgetAppPage.budgetBtn.click();
                            budgetAppPage.addNewEntry("test", amountValue);
        
                            expect(budgetAppPage.newCategory.getText()).toMatch("School");
                            expect(budgetAppPage.newDescription.getText()).toMatch("test");
                            expect(budgetAppPage.newAmountValue.getText()).toEqual("-$1,000.00");
        
                            const totalInflowTextAfterText = budgetAppPage.totalInflowTextAfter.getText().then(function(totalInflowTextAfterText) {
                                const totalInflowText1After = totalInflowTextAfterText.substring(1, 2);
                                const totalInflowText2After = totalInflowTextAfterText.substring(3, 9);
                                const totalInflowTextAllAfter = totalInflowText1After + totalInflowText2After;
                                const totalInflowFloatAfter = parseFloat(totalInflowTextAllAfter);
                                expect(totalInflowFloatAfter).toEqual(totalInflowFloatBefore);
                                
                                const totalOutflowTextAfterText = budgetAppPage.totalOutflowTextAfter.getText().then(function(totalOutflowTextAfterText) {
                                    const totalOutflowText1After = totalOutflowTextAfterText.substring(1, 2);
                                    const totalOutflowText2After = totalOutflowTextAfterText.substring(3, 9);
                                    const totalOutflowTextAllAfter = totalOutflowText1After + totalOutflowText2After;
                                    const totalOutflowFloatAfter = parseFloat(totalOutflowTextAllAfter);
                                    const totalOutflowFloatValue = totalOutflowFloatBefore + amountValue;
                                    expect(totalOutflowFloatAfter).toEqual(totalOutflowFloatValue);
                                    
                                    const workingBalanceTextAfterText = budgetAppPage.workingBalaceTextAfter.getText().then(function(workingBalanceTextAfterText) {
                                        const workingBalanceValueText1After = workingBalanceTextAfterText.substring(1, 2);
                                        const workingBalanceValueText2After = workingBalanceTextAfterText.substring(3, 9);
                                        const workingBalanceValueAllTextAfter = workingBalanceValueText1After + workingBalanceValueText2After;
                                        const workingBalanceValueFloatAfter = parseFloat(workingBalanceValueAllTextAfter);
                                        const workingBalanceValue = workingBalanceValueFloatBefore - amountValue;
                                        
                                        const workingBalanceValueInt = parseInt(workingBalanceValue);
                                        const workingBalanceValueIntAfter = parseInt(workingBalanceValueFloatAfter);
                                        expect(workingBalanceValueIntAfter).toEqual(workingBalanceValueInt);
                                        
                                        budgetAppPage.reportsBtn.click();
                                        const totalInflowTextReportsAfter = budgetAppPage.totalInflowReportsPageAfter.getText().then(function(totalInflowTextReportsAfter) {
                                            const totalInflowText1ReportsAfter = totalInflowTextReportsAfter.substring(1, 2);
                                            const totalInflowText2ReportsAfter = totalInflowTextReportsAfter.substring(3, 9);
                                            const totalInflowTextAllReportsAfter = totalInflowText1ReportsAfter + totalInflowText2ReportsAfter;
                                            const totalInflowFloatReportsAfter = parseFloat(totalInflowTextAllReportsAfter);
                                            expect(totalInflowFloatReportsAfter).toEqual(totalInflowFloatReportsBefore);
                                            
                                            const totalOutflowTextReportsAfter = budgetAppPage.totalOutflowReportsPageAfter.getText().then(function(totalOutflowTextReportsAfter) {
                                                const totalOutflowText1ReportsAfter = totalOutflowTextReportsAfter.substring(1, 2);
                                                const totalOutflowText2ReportsAfter = totalOutflowTextReportsAfter.substring(3, 9);
                                                const totalOutflowTextAllReportsAfter = totalOutflowText1ReportsAfter + totalOutflowText2ReportsAfter;
                                                const totalOutflowFloatReportsAfter = parseFloat(totalOutflowTextAllReportsAfter);
                                                const totalOutflowFloatReportsValue = totalOutflowFloatReportsBefore + amountValue;
                                                expect(totalOutflowFloatReportsAfter).toEqual(totalOutflowFloatReportsValue);
                                                expect(budgetAppPage.reportsList.getText()).toContain("School -$1,000.00");
                                                
                                                budgetAppPage.spendingByCategoryTab.click();
                                                expect(budgetAppPage.spendingByCategoryTabList.getText()).toContain("School -$1,000.00");
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