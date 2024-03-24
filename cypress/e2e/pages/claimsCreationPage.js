export class ClaimsCreationClass{
    
    claims='Claims'
    create_Claim='//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-9ir69"]'
    insured='(//input[@class="mantine-Input-input mantine-Select-input mantine-1thrnt8"])[1]'
    insurer='(//input[@class="mantine-Input-input mantine-Select-input mantine-1thrnt8"])[2]'
    policy='(//input[@class="mantine-Input-input mantine-Select-input mantine-1thrnt8"])[3]'
    surveyor='(//input[@class="mantine-Input-input mantine-Select-input mantine-1thrnt8"])[4]'
    occupancy='//input[@class="mantine-Input-input mantine-Select-input mantine-125yez1"]'
    details='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-1v4abot"])[1]'
    location='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-1v4abot"])[2]'
    incident_Date='//input[@class="mantine-Input-input mantine-DateInput-input mantine-1v4abot"]'
    estimated_Loss='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-1v4abot"])[3]'
    show_Details='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-1wy6b2y"]'
    save_Draft='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-g7194"])[1]'
    submit='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-g7194"])[2]'

    relationship_Manager='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[6]'
    sub_Intermediary='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[7]'
    save='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-g7194"]'

    clickOnClaims(){
        cy.contains(this.claims).click()
    }
    createClaim(){
        cy.xpath(this.create_Claim).click()
    }
    selectInsured(select_Insured){
        cy.xpath(this.insured).type(select_Insured).type('{downArrow}{enter}')
    }
    selectInsurer(select_Insurer){
        cy.xpath(this.insurer).type(select_Insurer).type('{downArrow}{enter}')
    }
    selectPolicy(){
        cy.xpath(this.policy).type('{downArrow}{enter}')
    }
    selectSurveyor(select_Surveyor){
        cy.xpath(this.surveyor).type(select_Surveyor).type('{downArrow}{enter}')
    }
    // click_On_Claims='(//a[@class="mantine-Text-root mantine-Anchor-root mantine-qdotc7"])[1]'
    selectOccupancy(select_Occupancy){
        cy.xpath(this.occupancy).click()
        cy.contains(select_Occupancy).click()
    }
    claimDetails(claim_Details){
        cy.xpath(this.details).type(claim_Details)
    }
    lossLocation(loss_Location){
        cy.xpath(this.location).type(loss_Location)
    }
    incidentDate(date){
        cy.xpath(this.incident_Date).type(date)
    }
    estimatedLoss(loss){
        cy.xpath(this.estimated_Loss).type(loss)
    }
    showDetails(){
        cy.xpath(this.show_Details).click()
    }
    saveAsDraft(){
        cy.xpath(this.save_Draft).click()
    }
    submit_Claim(){
        cy.xpath(this.submit).click()
    }
    
    addRelationshipManager(manager){
        cy.wait(3000)
        cy.xpath(this.relationship_Manager).type(manager).type('{downArrow}{enter}')
    
    }
    addSubIntermediary(){
        cy.wait(3000)
        cy.xpath(this.sub_Intermediary).click().type('{downArrow}{enter}')
    
    }

    saveDetails(){
        cy.xpath(this.save).click()
    }

}