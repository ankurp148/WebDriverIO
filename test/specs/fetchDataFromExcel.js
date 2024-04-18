import excel from "exceljs"

describe('data', () => {
    it('data', async () => {
        const book = new excel.Workbook();
        await book.xlsx.readFile('./test/testData/TestCaseData.xlsx');
        const sheet = book.getWorksheet('Sheet1');
        const data = sheet.getRow(1).getCell(1).toString();

        console.log(`THE DATA :${data}`);
    })
})