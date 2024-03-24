export class IntimationStatusUpdateClass{
    
    intimation='Intimation'
    //status
    all='//input[@value="ALL"]'
    closed='//input[@value="CLOSED"]'
    converted='//input[@value="CONVERTED"]'
    created='//input[@value="CREATED"]'
    //update intimation
    edit='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-1g9r2on"])[1]'
    edit_Insurer='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[2]'
    edit_occupancy='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[3]'
    edit_Details='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[1]'
    loss='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-gszoqu"])[2]'
    update_Proposal='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-g7194"]'
    convert_Claim='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-8idhf2"]'
    asssert_msg='Successfully converted proposal'
    

//Status check
    clickOnIntimation(){
        cy.contains(this.intimation).click()
    }
    statusAll(){
        cy.xpath(this.all).click()
        cy.wait(2000)
    }
    statusConverted(){
    
        cy.xpath(this.converted).click()
        cy.wait(2000)
    }

    
    statusClosed(){
        cy.xpath(this.closed).click()
        cy.wait(2000)
    }
    statusCreated(){
        cy.xpath(this.created).click()
        cy.wait(2000)
    }

    //Updating Intimation
    clickOnEdit(){
        cy.xpath(this.edit).click()
    }
    editInsurer(insurerSelect){
        cy.xpath(this.edit_Insurer).type('{selectAll}{backspace}',insurerSelect).type('{downArrow}{enter}')
    }
    editOccupancy(occupancy){
        cy.xpath(this.edit_occupancy).type('{selectAll}{backspace}',occupancy).type('{downArrow}{enter}')
    }
    editDetails(details){
        cy.xpath(this.edit_Details).type(details)
    }
    estimatedLoss(estLoss){
        cy.xpath(this.loss).type('{selectAll}{backspace}').type(estLoss)
    }
    updateProposal(){
        cy.xpath(this.update_Proposal).click()
    }
    convertToClaim(){
        cy.xpath(this.convert_Claim).click()
        cy.contains(this.asssert_msg).should('have.text','Successfully converted proposal')
        cy.log('Successfully converted proposal')
    }
   
}