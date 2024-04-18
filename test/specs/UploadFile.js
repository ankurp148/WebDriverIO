describe('upload file', () => {
    it('file', async () => {

        await browser.url("https://demoapps.qspiders.com/ui/fileUpload?sublist=0");
        await browser.maximizeWindow();

        const filePath = "C:/Users/HP/OneDrive/Pictures/spidy.jpg"
        const FilePath = await browser.uploadFile(filePath);
        await $('#fileInput').setValue(FilePath);
        await browser.pause(5000);
    })
})