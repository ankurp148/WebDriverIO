import { assert, expect } from "chai";
import SCM_loginPage from "../pageobjects/SCM_loginPage.js";
import SCM_AdminHomePage from "../pageobjects/SCM_AdminHomePage.js";
import SCM_addRetailer from "../pageobjects/SCM_addRetailer.js";

describe('smoke', () => {
    it('TC-01 a', async () => {
        await browser.url("http://rmgtestingserver/domain/Supply_Chain_Management/");
        await browser.maximizeWindow();
        await browser.pause(3000);

        await SCM_loginPage.adminLogin('admin', 'admin123', 'Admin');
        await browser.pause(3000);

        await SCM_AdminHomePage.AddRetailerButton();
        await browser.pause(3000);

        await SCM_addRetailer.addRetailer('Anjana', '123456', 'Mumbai (MumbaiTest)', '9876543210', 'anjana@gmail.com', 'tara pg');

        browser.acceptAlert();
        await SCM_AdminHomePage.LogoutButton();

        await browser.pause(3000);
    })

    it('TC-01 b', async () => {
        await browser.url("http://rmgtestingserver/domain/Supply_Chain_Management/");
        await browser.maximizeWindow();
        await browser.pause(3000);

        await SCM_loginPage.retailerLogin('Anjana', '123456', 'Retailer');
        await browser.pause(3000);

        let actName = await browser.$("//table[@class='table_displayData']/descendant::td[.=' Anjana ']");
        let actualName =await actName.getText();
        assert.equal(actualName, 'Anjana', 'RETAILER VERIFIED');

        await browser.pause(10000);

    })
})