import excel from "exceljs"

describe('write data', () => {
    it('data', async () => {
        const book = new excel.Workbook();
        await book.xlsx.readFile('./test/testData/TestCaseData.xlsx');
        const sheet = book.addWorksheet('Sheet12');
        const data = sheet.getRow(1).getCell(1).value = 'biryani'
        
        await book.xlsx.writeFile('./test/testData/TestCaseData.xlsx');
    })
})