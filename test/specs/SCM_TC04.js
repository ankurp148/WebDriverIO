import { assert, expect } from "chai";
import SCM_AdminHomePage from "../pageobjects/SCM_AdminHomePage.js";
import SCM_addManufacturer from "../pageobjects/SCM_addManufacturer.js";
import SCM_loginPage from "../pageobjects/SCM_loginPage.js";

describe('Verify items', () => {
    it('TC-04 a', async () => {
        await browser.url("http://rmgtestingserver/domain/Supply_Chain_Management/");
        await browser.maximizeWindow();
        await browser.pause(3000);

        await SCM_loginPage.adminLogin('admin', 'admin123', 'Admin');
        await browser.pause(3000);

        await SCM_AdminHomePage.AddManufacturerButton();
        await browser.pause(3000);

        await SCM_addManufacturer.AddManufacturerDetails('saba', 'saba@gmail.com', '9876543210', 'saba123', '123456')

        browser.acceptAlert();
        await browser.pause(3000);

        await SCM_AdminHomePage.LogoutButton();
        await browser.pause(3000);

    })

    it('TC-04 b', async () => {
        await browser.url("http://rmgtestingserver/domain/Supply_Chain_Management/");
        await browser.maximizeWindow();
        await browser.pause(3000);

        await SCM_loginPage.manufacturerLogin('saba123', '123456');
        await browser.pause(3000);

        let actName = await browser.$("//table[@class='table_displayData']/descendant::td[.=' Saba ']");

        let actualName = await actName.getText();
        assert.equal(actualName, 'Saba', 'VERIFIED');

        await browser.pause(1000);

    })
})