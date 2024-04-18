describe('Form filling', () => {
    it('registration', async () => {

        await browser.url("https://demo.automationtesting.in/Register.html");
        await browser.maximizeWindow()

        let firstname = await browser.$("//input[@placeholder='First Name']")
        firstname.setValue("raju");
        await browser.pause(1500);

        let lastname = await browser.$("//input[@placeholder='Last Name']")
        lastname.setValue("kumar");
        await browser.pause(1500);

        let address = await browser.$("//textarea[@ng-model='Adress']")
        address.setValue("tara pg bangalore");
        await browser.pause(1500);

        let email = await browser.$("//input[@type='email']")
        await country.isClickable()
        email.setValue("raju@gmail.com");
        await browser.pause(1500);

        let phoneno = await browser.$("//input[@type='tel']")
        phoneno.setValue("987654321");
        await phoneno.isDisplayed()
        await browser.pause(1500);

        let skills = await browser.$('#Skills')
        skills.click();
        await browser.pause(1500);
        await browser.$("//option[@value='Javascript']").click()
        await browser.pause(1500);

        // let country = await browser.$('#select2-country-container')
        // await country.scrollIntoView()
        // await country.isClickable()
        // await country.waitForClickable({timeout:5000})
        // await country.click();
        // await browser.pause(1500);

        // await country.setValue("India")
        // await browser.pause(1500);

        let gender = await browser.$("//input[@type='radio']")
        await gender.isEnabled()
        gender.click()
        await browser.pause(1500);

        let hobbies = await browser.$('#checkbox1')
        hobbies.click();
        await browser.pause(1500);

        let language = await browser.$('#msdd')
        language.click();
        await browser.pause(1500);
        await browser.$("//a[.='English']").click()
        await browser.pause(1500);

        let year = await browser.$('#yearbox')
        year.click();
        await browser.pause(1500);
        await browser.$("//option[.='1999']").click()
        await browser.pause(1500);

        let month = await browser.$("//select[@placeholder='Month']")
        month.click();
        await browser.pause(1500);
        await browser.$("//option[.='August']").click()
        await browser.pause(1500);

        let date = await browser.$('#daybox')
        date.click();
        await browser.pause(1500);
        await browser.$("//option [.='14']").click()
        await browser.pause(1500);

        let firstpw = await browser.$('#firstpassword')
        firstpw.setValue("123456");
        await browser.pause(1500);
        await browser.pause(1500);

        let secondpw = await browser.$("#secondpassword")
        secondpw.setValue("123456");
        await browser.pause(1500);

        await browser.$('#submitbtn').click();
        await browser.pause(1500);
    })
})