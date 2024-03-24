
export class IntimationCreationClass{


    intimation='Intimation'
    create_Intimation='//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-9ir69"]'
    insured='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[1]'
    policy='//input[@class="mantine-Input-input mantine-Select-input mantine-1thrnt8"]'
    // policy_Num='//input[@placeholder="Enter Policy Number"]'
    // policy_Type='//input[@placeholder="Select Policy Type"]'
    // insurer='//input[@placeholder="Select a Insurer"]'
    // // policy_Hold='/html/body/div[13]/div/div/div/div[2]/section/div[2]/form/div[4]/div/div/input'
    // insured_Amount='//input[@placeholder="Enter Insured Amount"]'
    // line_Of_Business='//input[@placeholder="Select Line Of Business"]'
    // start_Date='//input[@placeholder="Start Date"]'
    // end_Date='//input[@placeholder="End Date"]'
    // duration='//input[@placeholder="Enter Policy Duration"]'
    // // insurer='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[2]'
    occupancy='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[3]'
    details='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[1]'
    date='//button[@class="mantine-DateTimePicker-input mantine-Input-input mantine-DateTimePicker-input mantine-1e6hn20"]'
    time='//input[@class="mantine-TimeInput-input mantine-Input-input mantine-TimeInput-input mantine-ykhbk5"]'
    clickTime='//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-8waimi"]'
    cause='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[5]'
    desc='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[2]'
    contact_Person='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-gszoqu"])[3]'
    contact_Number='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-gszoqu"])[4]'
    incident_Address='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[3]'
    submit_Proposal='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-g7194"]'
   
    clickOnIntimation(){
        cy.contains(this.intimation).click()
    }
    createIntimation(){
        cy.xpath(this.create_Intimation).click()
    }
    selectInsured(insuredName){
        cy.xpath(this.insured).click().type(insuredName).type('{downArrow}{enter}')

    }
    policyDetails(enterPolicy){
        cy.xpath(this.policy).type(enterPolicy).type('{downArrow}{enter}')
    }
    // enterPolicyNum(policyNum){
    //     cy.xpath(this.policy_Num).type(policyNum)
    // }
    // enterPolicyType(policyType){
    //     cy.xpath(this.policy_Type).type(policyType).type('{downArrow}{enter}')
    // }
    // selectInsurer(select_Insurer){
    //     cy.xpath(this.insurer).type(select_Insurer).type('{downArrow}{enter}')
    // }
    // // selectPolicyHolder(policyHold){
    // //     cy.xpath(this.policy_Hold).type(policyHold).type('{downArrow}{enter}')
    // // }
    // selectInsuredAmount(selectAmount){
    //     cy.xpath(this.insured_Amount).type(selectAmount)
    // }
    // selectLineOfBusiness(lineOfBusiness){
    //     cy.xpath(this.line_Of_Business).type(lineOfBusiness).type('{downArrow}{enter}')
    // }
    // selectStartDate(startDate){
    //     cy.xpath(this.start_Date).type(startDate,'{enter}')
    //     // cy.contains(this.date1).click({timeout:8000})
    // }
    // selectEndtDate(endDate){
    //     cy.xpath(this.end_Date).type(endDate,'{enter}')
    //     // cy.contains(this.date2).click({timeout:8000})
    // }
    // selectDuration(durationSelect){
    //     cy.xpath(this.duration).type(durationSelect)
    // }
    // createPolicy(){
    //     cy.xpath(this.create_New_Policy).click()
    //     cy.wait(3000)
    //     cy.contains(this.assert_msg1).should('have.text','Successfully added Insured')
    //     cy.log('Successfully added Insured')
    // }
 
    // selectOccupancy(select_Occupancy){
    //     cy.wait(3000)
    //     cy.xpath(this.occupancy).type(select_Occupancy).type('{downArrow}{enter}')
    // }
    
    fillDetails(fill){
        cy.xpath(this.details).type(fill)
    }
    selectDate(date_Time){
        cy.xpath(this.date).click()
        cy.contains('13').click()
        cy.xpath(this.time).click().type(date_Time).click()

        cy.wait(2000)
        cy.xpath(this.clickTime).click()
    }
    selectCause(causeSel){
        cy.xpath(this.cause).click().type(causeSel).type('{downArrow}{enter}')
        // cy.contains(this.cause_Des).type('{enter}')
    }
    enterDescription(description){
        cy.xpath(this.desc).type(description)
    }
    selectContactPerson(name){
        cy.xpath(this.contact_Person).type(name)
    }
    selectContactNumber(num){
        cy.xpath(this.contact_Number).type(num).type('{downArrow}{enter}')
    }
    selectIncidentAddress(address){
        cy.xpath(this.incident_Address).type(address)
    }
    submit(){
        cy.scrollTo('top')
        cy.xpath(this.submit_Proposal).click()
    }
    


    
    
    
    
    
}