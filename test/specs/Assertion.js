describe('Assertion', () => {
    it('validate button', async () => {

        await browser.url("https://demoapps.qspiders.com/ui/button?sublist=0");
        await browser.maximizeWindow()
        await $('#btn').click();
        let val = $("//span[@class='text-green-600 p-1 px-2 ms-2 rounded-md']")
        await val.saveScreenshot('./some/path/elemScreenshot.png');
        console.log(val);
        await expect("---------->" + val).toHaveText('You selected "Yes"');

    })
})