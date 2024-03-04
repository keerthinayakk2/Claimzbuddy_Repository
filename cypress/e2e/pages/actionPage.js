export class ActionClass{
    


    actions='Actions'
    search_By_Id='/html/body/div[1]/div/div/main/div/div/div[1]/div[1]/div[1]/div/input'
    assign_To='/html/body/div[1]/div/div/main/div/div/div[1]/div[1]/div[2]/div/div/input'
    due='/html/body/div[1]/div/div/main/div/div/div[1]/div[1]/div[3]/div/div/input'
    all='/html/body/div[1]/div/div/main/div/div/div[1]/div[1]/div[3]/div/div/input'
    open='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div/div[1]/div/div[1]/input'
    edit='/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr[1]/td[9]/div/button[1]'
    message='/html/body/div[7]/div/div/div/div[2]/section/div[2]/form/div[3]/div/textarea'
    save_Action='Save Action'
    x='/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr[1]/td[9]/div/button[2]'
    closure_message='//div[@class="mantine-Input-wrapper mantine-Textarea-wrapper mantine-1v7s5f8"]//textarea'
    followup_Action='/html/body/div[4]/div/div/div/div[2]/section/div[2]/div[2]/div/div[1]/input'
    close_action='Close Action'
    
    closed='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div/div[2]/div/div[1]/input'
    follow_Up='(//span[@class="mantine-1ryt1ht mantine-Button-label"])[1]'
    select_Date='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[1]/div[1]/button'
    assign2='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[2]/div/div/input'
    msg2='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[3]/div/textarea'


    clickOnActions(){
        cy.contains(this.actions).click()
    }
    searchForId(string){
        cy.xpath(this.search_By_Id).type(string)
        cy.wait(3000)
    }
    assignTo(assign){
        cy.xpath(this.assign_To).type(assign).type('{downArrow}{enter}')
        cy.wait(3000)
    }
    
    allAction(){
        cy.xpath(this.all).click()
        cy.wait(3000)
    }
    dueAction(){
        cy.xpath(this.due).click()
        cy.wait(3000)
    }
    funOpen(){
        cy.xpath(this.open).click()
        cy.wait(3000)
    }
    editAction(){
        cy.xpath(this.edit).click()
        cy.wait(3000)
    }
    enterMessage(msg){
        cy.xpath(this.message).type(msg)
        cy.wait(3000)
    }
    save(){
        cy.contains(this.save_Action).click()
        cy.wait(3000)
    }
    
    ClickOnX(){
        cy.xpath(this.x).click()
        cy.wait(5000)
    }
    closureMessage(messageClosure){
        cy.xpath(this.closure_message).click().type(messageClosure)
        cy.wait(3000)
    }
    closeAction(){
        cy.contains(this.close_action).click()
        cy.wait(3000)
    }
    close()
    {
        cy.xpath(this.closed).click()
        cy.wait(4000)
        
    }

    followUp(){
        cy.xpath(this.follow_Up).click()
        cy.wait(3000)
    }

    selectDate(date){
        cy.xpath(this.select_Date).click()
        cy.contains(date).click()
    }
    assignTo2(assign_2){
        cy.xpath(this.assign2).type(assign_2).type('{downArrow}{enter}')

    }
    typeMessage(m){
        cy.xpath(this.msg2).type(m)
    }


}
