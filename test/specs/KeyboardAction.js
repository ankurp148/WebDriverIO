import { Key } from 'webdriverio'
describe('KEYBOARD', () => {
    it('copy paste', async () => {

        await browser.url("https://demo.automationtesting.in/Register.html");
        await browser.maximizeWindow()

        let firstname = await browser.$("//input[@placeholder='First Name']")
        await firstname.setValue('ritu');
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Ctrl, 'c']);
        await browser.pause(1500);

        let lastname = await browser.$("//input[@placeholder='Last Name']")
        await lastname.click();
        await browser.keys([Key.Ctrl, 'v']);
        await browser.pause(5000);

    })
})
