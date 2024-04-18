class AddProducts {
    get productName() {
        return $('[name="txtProductName"]');
    }

    get price() {
        return $('[name="txtProductPrice"]');
    }

    get unitType() {
        return $('[name="cmbProductUnit"]');
    }

    get category() {
        return $('[name="cmbProductCategory"]');
    }

    get stockManagement() {
        return $("//input[@value='1']");
    }

    get addProductButton() {
        return $("//input[@type='submit']");
    }

    async addProductDetails(prodName, price, unit, value) {
        await this.productName.setValue(prodName);
        await this.price.setValue(price);
        await this.unitType.selectByVisibleText(unit);
        await this.category.selectByVisibleText(value);
        await this.stockManagement.click();
        await this.addProductButton.click();
    }
}

export default new AddProducts()