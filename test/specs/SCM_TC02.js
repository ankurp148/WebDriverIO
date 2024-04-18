import { assert, expect } from "chai";
import SCM_loginPage from "../pageobjects/SCM_loginPage.js";
import SCM_addProducts from "../pageobjects/SCM_addProducts.js";
import SCM_ManufacturerHomePage from "../pageobjects/SCM_ManufacturerHomePage.js";
import SCM_AdminHomePage from "../pageobjects/SCM_AdminHomePage.js";

describe('Verify product', () => {
    it('TC-02 a', async () => {
        await browser.url("http://rmgtestingserver/domain/Supply_Chain_Management/");
        await browser.maximizeWindow();
        await browser.pause(3000);

        await SCM_loginPage.manufacturerLogin('saba123', '123456', 'Manufacturer');
        await browser.pause(3000);

        await SCM_ManufacturerHomePage.AddProductButton();
        await browser.pause(3000);

        await SCM_addProducts.addProductDetails(' Butter Puff ', '1111', 'PCS', ' Deserts ');
        await browser.pause(3000);


        browser.acceptAlert();
        await browser.pause(3000);

        await SCM_ManufacturerHomePage.LogoutButton();
        await browser.pause(3000);


    })

    it('smoke', async () => {
        await browser.url("http://rmgtestingserver/domain/Supply_Chain_Management/");
        await browser.maximizeWindow();
        await browser.pause(3000);

        await SCM_loginPage.adminLogin('admin', 'admin123', 'Admin');
        await browser.pause(5000);

        await SCM_AdminHomePage.ProductButton();
        await browser.pause(3000);

        let actName = await browser.$("//table[@class='table_displayData']/tbody/tr[2]/td[3]");
        await browser.pause(3000);

        let actualName =await actName.getText();
        assert.equal(actualName, 'Butter Puff', 'PRODUCT VERIFIED');

        await browser.pause(5000);

    })
})