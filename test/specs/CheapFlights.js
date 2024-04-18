import CheapFlightsHomePage from "../pageobjects/CheapFlightsHomePage.js";

describe('CheapFlights', () => {
    it('TC 01', async () => {

        await browser.url("https://www.in.cheapflights.com/");
        await browser.maximizeWindow();

        await CheapFlightsHomePage.returnButton.click();
        await browser.pause(1500);
        await CheapFlightsHomePage.onewayClick.click();
        await browser.pause(1500);
        await CheapFlightsHomePage.closeButton.click();
        await browser.pause(1500);
        await CheapFlightsHomePage.fromFlight.setValue("New Delhi");
        await browser.pause(1500);
        await CheapFlightsHomePage.toFlight.setValue("Bengaluru");
        await browser.pause(1500);
        await CheapFlightsHomePage.calendarClick.click();
        await browser.pause(1500);

        await CheapFlightsHomePage.dateBook();

        await browser.pause(1500);
        await CheapFlightsHomePage.enterClick.click();
        await browser.pause(1500);

        let parentWindow = await browser.getWindowHandle();
        let ID = await browser.getWindowHandles();
        console.log(ID);
        for (let i = 0; i < ID.length; i++) {
            if (ID[i] != parentWindow) {
                await browser.switchToWindow(ID[i])
               await browser.maximizeWindow();
                
            }
        }

        await browser.pause(3000);

        let flightName = await browser.$$("//div[@class='J0g6-operator-text']");
        let flightPrice = await browser.$$("//div[@class='f8F1-price-text']");

        for (let i = 0; i < flightName.length; i++) {

            let name = await flightName[i].getText();
            let price = await flightPrice[i].getText();

            console.log(`THE NAME OF FILGHT IS ===> :${name} & THE PRICE IS ===> :${price}`);
        }

    })
})