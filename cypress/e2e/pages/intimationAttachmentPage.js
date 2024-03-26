export class IntimationAttachmentClass{
    
    //click on Intimation to attach file
    intimation='Intimation'
    edit='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-1g9r2on"])[1]'
    attachments='(//button[@class="mantine-UnstyledButton-root mantine-Tabs-tab mantine-1cwk9zn"])[2]'

    //Attaching
    attach_File='(//input[@type="file"])[1]'
    assert_msg1='File has been successfully uploaded'
    select_file='(//input[@type="checkbox"])[3]'
    
    //sending file
    send='Send'
    to_Address='(//input[@placeholder="Select To Email Address"])'
    send_attachment='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-sa3oaj"]'
    assert_msg2='Successfully sent the files'

    //rejecting File
    reject='Reject'
    assert_msg3='Successfully rejected the files'

    //requesting File
    select_File_Type='(//input[@type="checkbox"])[4]'
    request='Request'
    assert_msg4='Successfully requested the files'

    //Downloading File
    download_File='//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-uin1f8"]'
    //deleting file
    delete_File='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-3vmpkb"])[1]'
    confirm_Delete='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-1l70tev"])[1]'

    //Adding and deleting new attachment type
    add_New_Attachment='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-hm5rmx"])[1]'
    add_Type='//input[@placeholder="Enter Attchment Type"]'
    save_Type='Save Attachment Type'
    delete_Type='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-lsayhv"])[1]'
    confirm_Delete_Type='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-1l70tev"])[1]'

    //sorting type
    click_On_Search='//div[@class="mantine-Input-input mantine-MultiSelect-input mantine-6n2p1n"]'
    unselect1='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-CloseButton-root mantine-MultiSelect-defaultValueRemove mantine-bebgsr"])[1]'
    unselect2='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-CloseButton-root mantine-MultiSelect-defaultValueRemove mantine-bebgsr"])[2]'
    unselect3='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-CloseButton-root mantine-MultiSelect-defaultValueRemove mantine-bebgsr"])[3]'

    //click on Intimation to attach file
    clickOnIntimation(){
        cy.contains(this.intimation).click()
    }
    editIntimation(){
        cy.xpath(this.edit).click()
    }
    goToAttachments(){
        cy.xpath(this.attachments).click()
    }

    //Attaching
    attachFile(){
        cy.xpath(this.attach_File).attachFile("Screenshot.png")
        // cy.wait(3000)
        cy.contains(this.assert_msg1).should('have.text','File has been successfully uploaded')
        cy.log('File has been successfully uploaded')
    }

    fileSelection(){
        cy.xpath(this.select_file).click()

    }
    // sending file
    clickOnSend(){
        cy.contains(this.send).invoke('show').click({ force: true })

    }

    
    typeToAddress(address){
        // cy.xpath(this.to_Address).click()
        // cy.wait(3000)
        cy.xpath(this.to_Address).type(address).type('{downArrow}{enter}',{force: true})
    }
  
    sendAttachment(){
        cy.xpath(this.send_attachment).click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    }
    send_assertion(){
        cy.contains(this.assert_msg2).should('have.text','Successfully sent the files')
        cy.log('Successfully sent the files')
    }

    //Rejecting file
    clickOnReject(){
        cy.contains(this.reject).invoke('show').click({ force: true })
    }
    reject_assertion(){
        cy.contains(this.assert_msg3).should('have.text','Successfully rejected the files')
        cy.log('Successfully rejected the files')
    }


    //Requesting File
    requestFile(){
        cy.xpath(this.select_File_Type).click()
        cy.contains(this.request).invoke('show').click({ force: true })
    }
    request_assertion(){
        cy.contains(this.assert_msg4).should('have.text','Successfully requested the files')
        cy.log('Successfully requested the files')
    }

    //Downloading File
    downloadFile(){
        cy.xpath(this.download_File).click()
        // cy.wait(3000)
    }
    //Deleting File
    deleteFile(){
        cy.xpath(this.delete_File).click()
        cy.xpath(this.confirm_Delete).click()
    }
    
    //Adding and deleting new attachment type
    addNewAttachment(type){
        cy.xpath(this.add_New_Attachment).click()
        cy.xpath(this.add_Type).type(type,{force: true})
        // cy.wait(3000)
        cy.contains(this.save_Type).click()
        // cy.wait(3000)
        
    }
    deleteNewAttachmentType(){
        cy.xpath(this.delete_Type).click()
        cy.xpath(this.confirm_Delete_Type).click()
    }
    deleteType(){
    }
//sorting type
    clickOnSearch(searchType){
        cy.xpath(this.click_On_Search).type(searchType).type('{downArrow}{enter}')
        // cy.wait(2000)
    }
    unselect(){
        cy.xpath(this.unselect1).click()
        
    }

}