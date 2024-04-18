import excel from "exceljs";

describe('data', () => {
    it('data', async () => {
        const workbook = new excel.Workbook();
        await workbook.xlsx.readFile('./test/testData/TestCaseData.xlsx');
        const sheet = workbook.getWorksheet('MedalTall');

        for (let i = 1; i <= sheet.rowCount; i++) {
            for (let j = 1; j <= sheet.columnCount; j++) {
                const cellValue = sheet.getRow(i).getCell(j).toString();
                process.stdout.write(cellValue + " ")
            }
            console.log('');
        }
    });
});
