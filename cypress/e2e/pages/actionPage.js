export class ActionClass{
    


    actions='Actions'
    search_By_Id='/html/body/div[1]/div/div/main/div/div/div[1]/div[1]/div[1]/div/input'
    assign_To='/html/body/div[1]/div/div/main/div/div/div[1]/div[1]/div[2]/div/div/input'
    select_type='/html/body/div[1]/div/div/main/div/div/div[1]/div[1]/div[3]/div/div/input'
    due='Due'
    all='All'
    open='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div/div[1]/div/div[1]/input'
    //Edit action
    edit='/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr[1]/td[9]/div/button[1]'
    message='//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"][1]'
    save_Action='Save Action'
    //close action
    x='/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr[1]/td[9]/div/button[2]'
    closure_message='//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"][1]'
    checkbox='Create'
    followup_Action='/html/body/div[4]/div/div/div/div[2]/section/div[2]/div[2]/div/div[1]/input'
    close_action='//span[@class="mantine-1ryt1ht mantine-Button-label"]'
    assert_msg1='Successfully created a followup action'
    //followup action
    closed='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div/div[2]/div/div[1]/input'
    follow_Up='(//span[@class="mantine-1ryt1ht mantine-Button-label"])[1]'
    select_Date='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[1]/div/button'
    select_Date1='//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"]'
    date_selected='//button[@aria-label="27 March 2024"]'
    assign2='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[2]/div/div/input'
    assign3='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[2]'
    msg2='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[3]/div/textarea'
    msg3='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[1]'
    closure_note='(//td[@class="mantine-zj4u7n"])[1]'
    cl_msg='Closure Note'

    clickOnActions(){
        cy.contains(this.actions).click()
        cy.log("Clicked on Actions")
    }
    searchForId(string){
        cy.xpath(this.search_By_Id).type(string)
        cy.wait(3000)
        cy.log("Search by using ID")
    }
    assignTo(assign){
        cy.xpath(this.assign_To).type(assign).type('{downArrow}{enter}')
        cy.wait(3000)
        cy.log("Search by using Assign To")
    }
    
    allAction(){
        cy.xpath(this.select_type).click()
        cy.contains(this.all).click()
        cy.wait(3000)
        cy.log("Select status")
    }
    dueAction(){
        cy.contains(this.due).click()
        cy.wait(3000)
    }
    funOpen(){
        cy.xpath(this.open).click()
        cy.wait(3000)
        cy.log("Select Status as Open")
    }
    //Edit action
    editAction(){
        cy.xpath(this.edit).click()
        cy.wait(3000)
        cy.log("Edit Action")
    }
    enterMessage(msg){
        cy.xpath(this.message).type(msg)
        cy.wait(3000)
    }
    save(){
        cy.contains(this.save_Action).click()
        cy.wait(3000)
        cy.contains(this.assert_msg1).should('have.text','Successfully created a followup action')
        cy.log('Successfully created a followup action')
    }
    save1(){
        cy.contains(this.save_Action).click()
        cy.wait(3000)
       
    }
    save2(){
        cy.contains(this.save_Action).click()
        cy.wait(3000)
        cy.contains(this.assert_msg1).should('have.text','Successfully created a followup action')
        cy.log('Successfully created a followup action')
    }
    //Close action
    ClickOnX(){
        cy.xpath(this.x).click()
        cy.wait(6000)
        cy.log('Click on X')
    }
    closureMessage(messageClosure){
        cy.xpath(this.closure_message).click().type(messageClosure)
        cy.wait(3000)
    }
    closeAction(){
        cy.contains(this.checkbox).click()
        cy.xpath(this.close_action).click()
        cy.wait(8000)
    }
    close()
    {
        cy.xpath(this.closed).click()
        cy.wait(4000) 
        cy.log("Select Status as Close")
    }
//Followup action
    followUp(){
        cy.xpath(this.follow_Up).click()
        cy.wait(5000)
    }

    selectDate(){
        cy.xpath(this.select_Date).click()
        cy.wait(2000)
        cy.xpath(this.date_selected).click()      
    }
    selectDate1(){
        cy.xpath(this.select_Date1).click()
        cy.wait(2000)
        cy.xpath(this.date_selected).click()      
    }
    assignTo2(assign_2){
        cy.xpath(this.assign2).type(assign_2).type('{downArrow}{enter}')

    }
    typeMessage(m){
        cy.xpath(this.msg2).type(m)
    }
    assignTo3(assign_3){
        cy.xpath(this.assign3).type(assign_3).type('{downArrow}{enter}')

    }
    typeMessage1(m1){
        cy.xpath(this.msg3).type(m1)
    }
    closure_msg(){
        cy.xpath(this.closure_note).click()
        cy.contains(this.cl_msg).should('have.text','Closure Note:')
        cy.log('Closure note has been viewed')
    }

    // assertion_msg(assert_msg){
    //     cy.contains(assert_msg).should('have.text',assert_msg)
    //     cy.log("Succsessfully Followed up an action")
    // }


}
