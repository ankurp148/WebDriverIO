import ExcelUtility from "../genric/ExcelUtility.js";

describe('PP', () => {
    it('AP', async () => {
        await browser.url("https://demoapps.qspiders.com/ui?scenario=1");
        await browser.maximizeWindow();
        await browser.pause(3000);

        let username = await ExcelUtility.fetchingSingleData("loginDetails", 1, 2);
        let un = await browser.$("//input[@name='name']");
        await un.setValue(username);
        await browser.pause(3000);

        let email = await ExcelUtility.fetchingSingleData("loginDetails", 2, 2);
        let unemail = await browser.$("//input[@name='email']");
        await unemail.setValue(email);
        await browser.pause(3000);

        let password = await ExcelUtility.fetchingSingleData("loginDetails", 3, 2);
        let unpassword = await browser.$("//input[@name='password']");
        await unpassword.setValue(password);
        await browser.pause(3000);

        await browser.$("//button[.='Register']").click();
        await browser.pause(3000);

    })
})