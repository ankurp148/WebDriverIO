import excel from "exceljs"

describe('medla tally', () => {
    it('ss', async () => {
        await browser.url('https://olympics.com/en/olympic-games/tokyo-2020/medals');

        let ele = await $('#onetrust-pc-btn-handler');
        await ele.click();
        let ele1 = await $("//button[text()='Reject All']");
        await ele1.click();

        let countryNames = await $$('[data-cy="country-name"]');
        let golds = await $$('[title="Gold"]');
        let silvers = await $$('[title="Silver"]');
        let bronzes = await $$('[title="Bronze"]');
        //let totalMedals = await $$('//span[@data-cy="medal-main" and @class="sc-kfYpNk cUKPAX"]/parent::div');

        const book = new excel.Workbook();
        await book.xlsx.readFile('./test/testData/TestCaseData.xlsx');
        const sheet = book.addWorksheet('MedalTal2');

        for (let i = 0; i < countryNames.length; i++) {
            let countryName = await countryNames[i].getText();
            let gold = await golds[i].getText();
            let silver = await silvers[i].getText();
            let bronze = await bronzes[i].getText();
            //let totalMedal = await totalMedals[i].getText();

            if (gold.includes("-")) {
                gold = "0";
            }
            if (silver.includes("-")) {
                silver = "0";
            }
            if (bronze.includes("-")) {
                bronze = "0";
            }
            console.log(`${countryName} ---> ${gold} -> ${silver} -> ${bronze}`);

            sheet.addRow(i).getCell(1).value = `${countryName}`
            sheet.getRow(i).getCell(2).value = `${gold}`
            sheet.getRow(i).getCell(3).value = `${silver}`
            sheet.getRow(i).getCell(4).value = `${bronze}`
            await book.xlsx.writeFile('./test/testData/TestCaseData.xlsx');
        }


    })
})

