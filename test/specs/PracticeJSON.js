import fs from "fs"
let cred = JSON.parse(fs.readFileSync('./test/testData/data.json'))

describe('fetching data from JSON', () => {

    let un = cred.username
    let pw = cred.password
    let em = cred.email
    console.log(un, pw, em);

    it('login', async () => {
        await browser.url("https://demoapps.qspiders.com/ui?scenario=1");
        await browser.maximizeWindow();
        await browser.pause(1500);

        let userName = await browser.$("//input[@name='name']");
        await userName.setValue(un);
        await browser.pause(1500);

        let unemail = await browser.$("//input[@name='email']");
        await unemail.setValue(em);
        await browser.pause(1500);

        let unpassword = await browser.$("//input[@name='password']");
        await unpassword.setValue(pw);
        await browser.pause(1500);

        await browser.$("//button[.='Register']").click();
        await browser.pause(1500);

    })
})