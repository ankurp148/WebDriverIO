class ManufacturerHomePage {
    get addProductButton() {
        return $("//a[.='Add Products']");
    }

    get logout() {
        return $("//input[@value='Log out']")
    }

    get stock() {
        return $("//a[.='Manage Stock']")
    }

    get update() {
        return $("//a[.='Manage Stock']")
    }

    async UpdateStockButton() {
        await this.update.click();
    }

    async AddProductButton() {
        await this.addProductButton.click();
    }

    async LogoutButton() {
        await this.logout.click();
    }

    async manageStockButton() {
        await this.stock.click();
    }
}
export default new ManufacturerHomePage()