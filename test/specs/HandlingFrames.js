describe('Handle Frames', () => {
    it('switch frame', async () => {
        await browser.url("https://demo.automationtesting.in/Frames.html")
        const frameElement = await browser.$('#singleframe')
        await browser.switchToFrame(frameElement)
        await browser.$("//input[@type='text']").setValue("hi")
        browser.pause(3500)
    })
})
