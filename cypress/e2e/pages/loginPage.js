export class LoginClass{

    userName='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-gszoqu"])[1]'
    password='(//input[@class="mantine-15vtssg mantine-PasswordInput-innerInput"])[1]'
    login='(//div[@class="mantine-1wpc1xj mantine-Button-inner"])[1]'

    enterUserName(username){
        cy.log("Enter User name")
        cy.xpath(this.userName).click().type('{selectAll}{backspace}').type(username)

    }
    enterPassword(password){
        cy.log("Enter Password")
        cy.xpath(this.password).click().type('{selectAll}{backspace}').type(password)
    }
    clickOnLogin(){
        cy.log("Click on Login")
        cy.xpath(this.login).click()
        cy.wait(2000)
        cy.log("Successfully Logged In")
    }

}