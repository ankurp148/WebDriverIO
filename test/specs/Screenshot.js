describe('screenshot', () => {
    it('ss', async () => {
        let ran = Math.floor(Math.random() * 100);
        await browser.url("https://demoapps.qspiders.com/ui/button?sublist=0");
        await browser.maximizeWindow();
        await browser.pause(5000);
        await browser.saveScreenshot('./screenshot' + ran + '.png');

    })
})