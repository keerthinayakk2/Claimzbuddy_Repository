export class ClaimsEditActionNotificationClass{

    //edit button
    select_Claims='(//a[@class="mantine-Text-root mantine-Anchor-root mantine-qdotc7"])[1]'
    edit_Button='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-7nkdkt"])[1]'
    update_Assign='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[8]'
    update_Status='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[9]'
    update='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-sa3oaj"])'

//actionNotification button
    button='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-18ai6yf"])[1]'
    notification_Button='(//button[@class="mantine-UnstyledButton-root mantine-Tabs-tab mantine-al1eli"])'
    create_New='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-18ai6yf"])[2]'
    enter_Message='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[5]'
    save_Notification='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-sa3oaj"])'
    close_Notification='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-CloseButton-root mantine-1pt46x6"])[1]'
    closed_Notification='(//input[@class="mantine-1cu6yj8 mantine-Radio-radio"])[2]'
    open_Notification='(//input[@class="mantine-1cu6yj8 mantine-Radio-radio"])[1]'

    action_Button='(//button[@class="mantine-UnstyledButton-root mantine-Tabs-tab mantine-h199wc"])'
    create_New_Action='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-12eef92"])'
    date_Time='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])'
    select_date='(//button[@class="mantine-UnstyledButton-root mantine-Day-day mantine-DatePickerInput-day mantine-7yisjr"])[2]'
    assign_To='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[8]'
    enter_Notification_Message='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[5]'
    save_Action='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-sa3oaj"])'
    close_Action='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-CloseButton-root mantine-1pt46x6"])[1]'
    closure_msg='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[5]'
    close='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-sa3oaj"])'
    closed_Action='(//input[@class="mantine-196ir7f mantine-Radio-radio"])[2]'
    open_Action='(//input[@class="mantine-196ir7f mantine-Radio-radio"])[1]'
    assert1='Successfully added new action'

    //Delete
    delete='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-tsmkwl"])'
    confirm_Delete='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-1l70tev"])'


    //Edit button
    selectClaims(){
        cy.xpath(this.select_Claims).click()

    }
    clickOnEditButton(){
        cy.xpath(this.edit_Button).click()
        cy.wait(2000)
    }
    updateAssign(assign){
        cy.xpath(this.update_Assign).click().type('{selectAll}{backspace}').type(assign).type('{downArrow}{enter}')
        cy.wait(2000)
    }
    updateStatus(status){
        cy.xpath(this.update_Status).click().type('{selectAll}{backspace}').type(status).type('{downArrow}{enter}')
        cy.wait(2000)
    }
    updateChanges(){
        cy.xpath(this.update).click()
        cy.wait(2000)
    }
 
    //ActionNotification Button
    buttonClick(){
        cy.xpath(this.button).click()
        cy.wait(2000)
    }

    notification(message){
        cy.xpath(this.notification_Button).click()
        cy.wait(2000)
        cy.xpath(this.create_New).click()
        cy.wait(2000)
        cy.xpath(this.enter_Message).click().type(message)
        cy.wait(2000)
        cy.xpath(this.save_Notification).click()
        cy.wait(2000)
        cy.xpath(this.close_Notification).click()
        cy.wait(2000)
    }
    notificationStatus(){
        cy.xpath(this.closed_Notification).click()
        cy.wait(2000)
        cy.xpath(this.open_Notification).click()
    }

    action(assign,msg,closure){
        cy.xpath(this.action_Button).click()
        cy.wait(2000)
        cy.xpath(this.create_New_Action).click()
        cy.wait(2000)
        cy.xpath(this.date_Time).click()
        cy.wait(2000)
        cy.xpath(this.select_date).click()
        cy.wait(2000)
        cy.xpath(this.assign_To).click().type(assign).type('{downArrow}{enter}')
        cy.wait(2000)
        cy.xpath(this.enter_Notification_Message).click().type(msg)
        cy.wait(2000)
        cy.xpath(this.save_Action).click()
        cy.contains(this.assert1).should('have.text','Successfully added new action')
        cy.log('Successfully added new action')
        cy.xpath(this.close_Action).click({force:true})
        cy.xpath(this.closure_msg).type(closure)
        cy.xpath(this.close).click()
        cy.wait(2000)
    }

    
    
       actionStatus(){
        cy.xpath(this.closed_Action).click()
        cy.xpath(this.open_Action).click()
    }

    //Delete
    deleteClaim(){
        cy.xpath(this.delete).click()
        cy.wait(2000)
        cy.xpath(this.confirm_Delete).click()
    }


}