const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    get loginButton() { return $('input[type="submit"]'); }
    get errorMessage() { return $('h3[data-test="error"]'); }

    open () {
        return super.open('');
    }

}

module.exports = new LoginPage();
