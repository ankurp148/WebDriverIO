describe('Handling Window', () => {
    it('switch window', async () => {

        await browser.url("https://demoapps.qspiders.com/ui/scroll/newInfinite?scenario=1");
        await browser.maximizeWindow()
        var parentWindow = browser.getWindowHandle()
        var ID = browser.getWindowHandles()
        console.log(ID);
        for (var i = 0; i < ID.length; i++) {
            if (ID[i] != parentWindow) {
                browser.switchToWindow(ID[i])
                browser.maximizeWindow()
                break;
            }
        }
        browser.pause(3000)
        browser.switchToWindow(parentWindow)
    })
})