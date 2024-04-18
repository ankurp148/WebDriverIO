class AdminHomePage {
    get addRetailerButton() {
        return $("//a[.='Add Retailers']");
    }

    get logout() {
        return $("//input[@value='Log out']")
    }

    get productButton() {
        return $("//a[.='Products']");
    }

    get manufacturer() {
        return $("//a[.='Add Manufacturer']");
    }

    async AddManufacturerButton() {
        await this.manufacturer.click()
    }

    async AddRetailerButton() {
        await this.addRetailerButton.click()
    }

    async LogoutButton() {
        await this.logout.click()
    }

    async ProductButton() {
        await this.productButton.click()
    }

}

export default new AdminHomePage()