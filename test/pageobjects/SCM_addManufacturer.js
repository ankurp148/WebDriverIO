class AddManufacturer {
    get manufacturerName() {
        return $('[name="txtManufacturerName"]');
    }

    get manufacturerEmail() {
        return $('[name="txtManufacturerEmail"]');
    }
    get manufacturerPhone() {
        return $('[name="txtManufacturerPhone"]');
    }

    get manufacturerUsername() {
        return $('[name="txtManufacturerUname"]');
    }
    get manufacturerPassword() {
        return $('[name="txtManufacturerPassword"]');
    }

    get addManufacturerButton() {
        return $("//input[@value='Add Manufacturer']");
    }

    async AddManufacturerDetails(name, email, phone, username, password) {
        await this.manufacturerName.setValue(name);
        await this.manufacturerEmail.setValue(email);
        await this.manufacturerPhone.setValue(phone);
        await this.manufacturerUsername.setValue(username);
        await this.manufacturerPassword.setValue(password);
        await this.manufacturerEmail.click();
    }

}
export default new AddManufacturer()