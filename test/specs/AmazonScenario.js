describe('amazon', () => {
    it('brand', async () => {
        await browser.url("https://www.amazon.in/");
        await browser.maximizeWindow();

        let search = await browser.$('#twotabsearchtextbox');
        await search.setValue("phone");

        let enter = await browser.$('#nav-search-submit-button');
        await enter.click();

        await browser.pause(3000);

        let brand = await browser.$("//span[.='Brand']");
        await brand.waitForClickable({ timeout: 5000 });
        await enter.click();

        await browser.pause(3000);

        let sumsung = await browser.$("//li[@id='p_89/Samsung']/descendant::div[@class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left']");
        // await sumsung.scrollIntoView()
        // await sumsung.waitForClickable({ timeout: 5000 });
        await enter.click();

        await browser.pause(3000);

        let phoneNames = await browser.$$("//div[@class='s-main-slot s-result-list s-search-results sg-row']/descendant::span[@class='a-size-medium a-color-base a-text-normal']")

        await phoneNames.forEach(async (element) => {
            console.log("--->" + await element.getText() + "<---");
        });

        await browser.pause(5000);
    })
})