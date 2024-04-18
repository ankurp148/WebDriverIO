class LoginPage {
    get username() {
        return $('[name="txtUsername"]');
    }

    get password() {
        return $('[name="txtPassword"]');
    }

    get submitLogin() {
        return $("//input[@type='submit']");
    }

    get admin() {
        return $('[name="login_type"]');
    }

    get manufacturer() {
        return $('[name="login_type"]');
    }

    get retailer() {
        return $('[name="login_type"]');
    }

    async adminLogin(username, password, type) {

        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.admin.selectByVisibleText(type);
        await this.submitLogin.click();
    }

    async manufacturerLogin(username, password, type) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.manufacturer.selectByVisibleText(type);
        await this.submitLogin.click();
    }

    async retailerLogin(username, password, type) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.retailer.selectByVisibleText(type);
        await this.submitLogin.click();
    }
}

export default new LoginPage()