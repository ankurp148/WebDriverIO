import { assert, expect } from "chai";
import SCM_AdminHomePage from "../pageobjects/SCM_AdminHomePage.js";
import SCM_loginPage from "../pageobjects/SCM_loginPage.js";
import SCM_ManufacturerHomePage from "../pageobjects/SCM_ManufacturerHomePage.js";


describe('Verify changed product', () => {
    it('TC-03 a', async () => {
        await browser.url("http://rmgtestingserver/domain/Supply_Chain_Management/");
        await browser.maximizeWindow()
        await browser.pause(3000);

        await SCM_loginPage.manufacturerLogin('saba123', '123456', 'Manufacturer');
        await browser.pause(3000);

        await SCM_ManufacturerHomePage.manageStockButton();
        await browser.pause(3000);

        let quantity = await browser.$("//table[@class='table_displayData']/tbody/tr[41]/td[4]/input");
        await quantity.setValue(50);
        await browser.pause(3000);

        await SCM_ManufacturerHomePage.UpdateStockButton();
        await browser.pause(3000);

        await SCM_ManufacturerHomePage.LogoutButton();
        await browser.pause(3000);

    })

    it('TC-03 b', async () => {
        await browser.url("http://rmgtestingserver/domain/Supply_Chain_Management/");
        await browser.maximizeWindow()
        await browser.pause(3000);

        await SCM_loginPage.adminLogin('admin', 'admin123', 'Admin');
        await browser.pause(3000);

        await SCM_AdminHomePage.ProductButton();

        let quantity = await browser.$("//table[@class='table_displayData']/tbody/tr[65]/td[7]");

        let actualName = await quantity.getText();
        assert.equal(actualName, '50', 'VERIFIED');
        await browser.pause(3000);

    })
}) 

