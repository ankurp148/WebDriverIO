import fs from "fs"
let cred = JSON.parse(fs.readFileSync('./test/testData/multipleData.json'))

describe('fetching multiple data from JSON', () => {

    cred.forEach(data => {
    
    let un = data.username
    let pw = data.password
    let em = data.email
    console.log(un, pw, em);

    it('login', async () => 
    {
        await browser.url("https://demoapps.qspiders.com/ui?scenario=1");
        await browser.maximizeWindow();
        await browser.pause(3000);

        let userName = await browser.$("//input[@name='name']");
        await userName.setValue(un);
        await browser.pause(3000);

        let unemail = await browser.$("//input[@name='email']");
        await unemail.setValue(em);
        await browser.pause(3000);

        let unpassword = await browser.$("//input[@name='password']");
        await unpassword.setValue(pw);
        await browser.pause(3000);

        await browser.$("//button[.='Register']").click();
        await browser.pause(3000);
    });
    })
})