class AddRetailer {

    get username() {
        return $('[name="txtRetailerUname"]')
    }

    get password() {
        return $('[name="txtRetailerPassword"]')
    }

    get areacode() {
        return $('[name="cmbAreaCode"]');
    }

    get phonenumber() {
        return $('[name="txtRetailerPhone"]')
    }

    get email() {
        return $('[name="txtRetailerEmail"]')
    }

    get address() {
        return $('[name="txtRetailerAddress"]')
    }

    get submit() {
        return $("//input[@type='submit']")
    }

    async addRetailer(username, password, areacode, phonenumber, email, address) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.areacode.selectByVisibleText(areacode);
        await this.phonenumber.setValue(phonenumber);
        await this.email.setValue(email);
        await this.address.setValue(address);
        await this.submit.click();
    }
}
export default new AddRetailer()