const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page');


Given('User is located on the main page of saucedemo website', async () => {
    await loginPage.open();
});

When('User clicks the {string} button', async (button) => {
    if (button === 'Login') {
        await loginPage.loginButton.click();
    }
});

Then('User should see {string} error message', async (errorMessage) => {
    const error = await loginPage.errorMessage.getText();
    expect(error).toEqual(errorMessage);
});





