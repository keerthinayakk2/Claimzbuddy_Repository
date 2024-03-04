export class LoginClass{

    userName='/html/body/div[1]/div/div/form/div[1]/div/input'
    password='/html/body/div[1]/div/div/form/div[2]/div/div[1]/input'
    login='/html/body/div[1]/div/div/form/button/div'

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
    }

}