export class ClaimsTimelineClass{

    claim_Select='(//a[@class="mantine-Text-root mantine-Anchor-root mantine-qdotc7"])[1]'
    timeline='(//button[@class="mantine-UnstyledButton-root mantine-Tabs-tab mantine-1cwk9zn"])[4]'
    date_Of_Incident='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[1]'
    select_Date='//div[@class="mantine-Popover-dropdown mantine-1sd8r2y"]'
    date_select='(//button[@class="mantine-UnstyledButton-root mantine-Day-day mantine-DatePickerInput-day mantine-7yisjr"])[3]'
    date_Of_Intimation='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[2]'
    date_of_Intimation_Insurer='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[2]'
    date_Of_Surveyor='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[3]'
    date_Of_Survey='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[4]'
    date_Of_LOR='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[5]'
    date_Of_Final_Submission='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[6]'
    date_Of_Assessment_Received='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[7]'
    date_Of_Consent='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[8]'
    discharge_Voucher_Received='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[9]'
    discharge_Voucher_Submitted='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[10]'
    settlement_Amount='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[11]'
    save='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-g7194"]'
    
    


    




    selectClaim(){
        cy.xpath(this.claim_Select).click()
    }

    selectTimeline(){
        cy.xpath(this.timeline).click()
    }
    dateOfIncident(date){
        cy.xpath(this.date_Of_Incident).click()
        cy.wait(3000)
        // cy.xpath(this.select_Date).click({ force: true })
        cy.xpath(this.date_select).invoke('show').click({ force: true })
    }
    dateOfIntimation(){
        cy.xpath(this.date_Of_Intimation).click()
        cy.xpath(this.date_select).invoke('show').click({ force: true })
    }
    dateOfIntimationInsurer(){
        cy.xpath(this.date_of_Intimation_Insurer).click()
        cy.xpath(this.date_select).invoke('show').click({ force: true })
    }
    dateOfSurveyor(){
        cy.xpath(this.date_Of_Surveyor).click()
        cy.xpath(this.date_select).invoke('show').click({ force: true })
    }
    dateOfSurvey(){
        cy.xpath(this.date_Of_Survey).click()
        cy.xpath(this.date_select).invoke('show').click({ force: true })
    }
    dateOfLOR(){
        cy.xpath(this.date_Of_LOR).click()
        cy.xpath(this.date_select).invoke('show').click({ force: true })
    }
    dateOfFinalSubmission(){
        cy.xpath(this.date_Of_Final_Submission).click()
        cy.xpath(this.date_select).invoke('show').click({ force: true })
    }
    dateOfAssessmentReceived(){
        cy.xpath(this.date_Of_Assessment_Received).click()
        cy.xpath(this.date_select).invoke('show').click({ force: true })
    }
    
    dischargeVoucherReceived(){
        cy.xpath(this.discharge_Voucher_Received).click()
        cy.xpath(this.date_select).invoke('show').click({ force: true })
    }
    dischargeVoucherSubmitted(){
        cy.xpath(this.discharge_Voucher_Submitted).click()
        cy.xpath(this.date_select).invoke('show').click({ force: true })
    }
    dateOfConsent(){
        cy.xpath(this.date_Of_Consent).click()
        cy.xpath(this.date_select).invoke('show').click({ force: true })
    }
    settlementAmount(){
        cy.xpath(this.settlement_Amount).click()
        cy.xpath(this.date_select).invoke('show').click({ force: true })
    }
    saveTimeline(){
        cy.xpath(this.save).click()
        cy.wait(3000)
    }
    

   



}