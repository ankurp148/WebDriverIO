describe('pro kabadi', () => {
    it('pro', async () => {
        await browser.url('https://www.prokabaddi.com/');

        let names = await $$("//div[@class='table-body']/descendant::p[@class='name']");
        let matches = await $$("//div[@class='table-body']/descendant::div[@class='table-data matches-play']");
        let won = await $$("//div[@class='table-body']/descendant::div[@class='table-data matches-won']");
        let lost = await $$("//div[@class='table-body']/descendant::div[@class='table-data matches-lost']");
        let diff = await $$("//div[@class='table-body']/descendant::div[@class='table-data score-diff']");
        let points = await $$("//div[@class='table-body']/descendant::div[@class='table-data points']");

        for (let i = 0; i < names.length; i++) {
            let team = await names[i].getText();
            let totalMatch = await matches[i].getText();
            let totalWon = await won[i].getText();
            let totalLost = await lost[i].getText();
            let totalDifference = await diff[i].getText();
            let totalPoints = await points[i].getText();

            console.log(team + "----->" + totalMatch + "->" + totalWon + "->" + totalLost + "->" + totalDifference + "->" + totalPoints);

        }
    })
})



