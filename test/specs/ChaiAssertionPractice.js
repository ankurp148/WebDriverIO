import { assert, expect } from "chai";

describe('ASSERT ', () => {
    it('CHAI', async () => {
        await browser.url("https://demoapps.qspiders.com/ui");
        await browser.maximizeWindow();
        let name = await browser.$("//input[@name='name']").setValue("ankur");
        let email = await browser.$("//input[@name='email']").setValue("ankur@gmail.com");
        let password = await browser.$("//input[@name='password']").setValue("123456");
        let register = await browser.$("//button[.='Register']");
        let regText = await register.getText();
        assert.equal(regText, 'register', 'EXPECTED RESULT IS NOT EQUAL TO ACTUAL RESULT');

    })
})