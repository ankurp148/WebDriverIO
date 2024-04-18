import { expect } from "chai";

describe('assertion', () => {
    it('Chai', async () => {

        await browser.url("https://demoapps.qspiders.com/ui/scroll/newInfinite?scenario=1");
        await browser.maximizeWindow();
        let title = await browser.getTitle();
        expect(title).to.include('Demoapps | Qspider');

    })
})