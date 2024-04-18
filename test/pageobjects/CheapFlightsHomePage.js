class HomePage {
    get returnButton() {
        return $("//div[@class='zcIg']/descendant::span[.='Return']");
    }

    get onewayClick() {
        return $("//ul[@aria-label='Trip type Return']/child::li[@aria-label='One-way']");
    }

    get returnwayClick() {
        return $("//ul[@aria-label='Trip type Return']/child::li[@aria-label='Return']");
    }

    get closeButton() {
        return $("//div[@class='c_neb-item-close']");
    }

    get fromFlight() {
        return $("//input[@aria-label='Flight origin input']");
    }

    get toFlight() {
        return $("//input[@aria-label='Flight destination input']");
    }

    get calendarClick() {
        return $("//div[@aria-label='Start date']");
    }

    get enterClick() {
        return $("//button[@aria-label='Search']");
    }

    async dateBook() {


        let date = '3 May, 2024';
        for (; ;) {
            try {
                await browser.$("//div[@aria-label='" + date + " Prices on this day are around average']").click();
                break;
            } catch (error) {
                await browser.$("//div[@aria-label='Next month']").click();
            }

        }
    }
}
export default new HomePage