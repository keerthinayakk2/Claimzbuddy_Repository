
export class NotificationClass{

    notifications='Notifications'
    search='/html/body/div[1]/div/div/main/div/div/div[1]/div[1]/div/div/input'
    mark_as_read='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-o1cmkh"])[1]'
    open='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div/div[1]/div/div[1]/input'
    closed='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div/div[2]/div/div[1]/input'
    msg='Successfully marked as read'

    clickOnNotification(){
        cy.contains(this.notifications).click()
    }
    searchForId(string){
        cy.xpath(this.search).type(string)
        cy.wait(3000)
        cy.log("Search By Id")
    }
    mark(){
        cy.xpath(this.mark_as_read).click()
        cy.contains(this.msg).should('have.text','Successfully marked as read')
        cy.log("Successfully marked as read")
    }
    close()
    {
        cy.xpath(this.closed).click()
        cy.wait(3000)
        cy.log("Select status as Close")
    }
    funOpen(){
        cy.xpath(this.open).click()
        cy.log("Select status as Close")
    }

}
