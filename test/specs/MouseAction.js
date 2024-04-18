describe('Mouse action', () => {
    it('drag and drop', async () => {

        await browser.url("https://demo.automationtesting.in/Static.html");
        await browser.maximizeWindow()
        let a = await $('#mongo')
        let b = await $('#droparea')
        await a.dragAndDrop(b);
        await browser.pause(3000);

    })

    it.only('mouse hover', async () => {

        await browser.url("https://demoapps.qspiders.com/ui/mouseHover/tab?sublist=3");
        await browser.maximizeWindow()
        let ele = await $("//li[@class='Men p-4 relative']");
        await ele.waitForDisplayed();
        await browser.moveTo(ele);
        await browser.pause(3000);
    })

    it('drop down', async () => {
        await browser.url("https://demo.automationtesting.in/Register.html");
        await browser.maximizeWindow();
        await browser.scroll(0, 250)

        let skills = await browser.$$('#Skills option');

        skills.forEach(async (element) => {
            console.log(await element.getText());
        });

        await browser.pause(1500);
    });
})