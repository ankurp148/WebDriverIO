import excel from "exceljs";

class ExcelUtils {
    async fetchingMultipleData(sheetname) {
        const workbook = new excel.Workbook();
        await workbook.xlsx.readFile('./test/testData/TestCaseData.xlsx');
        const sheet = workbook.getWorksheet(sheetname);

        for (let i = 1; i <= sheet.rowCount; i++) {
            for (let j = 1; j <= sheet.columnCount; j++) {
                const cellValue = sheet.getRow(i).getCell(j).toString();
                process.stdout.write(cellValue + " ")
                return cellValue;
            }
            console.log('');
        }

    }

    async fetchingSingleData(sheetname, row, cell) {
        const book = new excel.Workbook();
        await book.xlsx.readFile('./test/testData/TestCaseData.xlsx');
        const sheet = book.getWorksheet(sheetname);
        return sheet.getRow(row).getCell(cell).toString();
    }

    async writeDataInExcel(sheetname, value) {
        const workbook = new excel.Workbook();
        await workbook.xlsx.readFile('./test/testData/TestCaseData.xlsx');
        const sheet = workbook.getWorksheet(sheetname);
        const newRow = sheet.addRow();
        newRow.getCell(1).value = value;

        await workbook.xlsx.writeFile('./test/testData/TestCaseData.xlsx');
    }


}



export default new ExcelUtils();