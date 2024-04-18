describe('Handling alert', () => {
    it('alert', async () => {
        it('handle alert', async () => {
            await browser.pause(3000);
            await browser.url("https://demoapps.qspiders.com/ui/alert?sublist=0");
            await $('#buttonAlert2').click();
            await browser.acceptAlert();
            //  await browser.dismissAlert();
            await browser.pause(3000);
        })
    })
})