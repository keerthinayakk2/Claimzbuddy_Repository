
export class NotificationClass{

    notifications='Notifications'
    search='/html/body/div[1]/div/div/main/div/div/div[1]/div[1]/div/div/input'
    mark_as_read='/html/body/div[1]/div/div/main/div/div/div[2]/div/div/div[1]/div[1]/div/table/tbody/tr/td[8]/div/button'
    open='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div/div[1]/div/div[1]/input'
    closed='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div/div[2]/div/div[1]/input'


    clickOnNotification(){
        cy.contains(this.notifications).click()
    }
    searchForId(string){
        cy.xpath(this.search).type(string)
        cy.wait(3000)
    }
    mark(){
        cy.xpath(this.mark_as_read).click()
    }
    close()
    {
        cy.xpath(this.closed).click()
        
    }
    funOpen(){
        cy.xpath(this.open).click()
    }

}
