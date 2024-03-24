
export class ClaimsNotesClass{

    search_By_Status='//input[@class="mantine-MultiSelect-searchInput mantine-MultiSelect-searchInputEmpty mantine-1t7zc7a"]'
    unselect='//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-CloseButton-root mantine-MultiSelect-defaultValueRemove mantine-bebgsr"]'
    search_By_ClaimNumber='//input[@class="mantine-Input-input mantine-TextInput-input mantine-kcpopt"]'

    filter='//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-jzn6gt"]'
    search_By_Insured='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[1]'
    search_By_Insurer='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[2]'
    search_By_Processor='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[3]'
    search_By_Surveyor='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[4]'
    search_By_ClaimAge='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[5]'
    unfilter='//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-tsmkwl"]'
    
    claim_Select='(//a[@class="mantine-Text-root mantine-Anchor-root mantine-qdotc7"])[1]'
    notes='(//button[@class="mantine-UnstyledButton-root mantine-Tabs-tab mantine-1cwk9zn"])[2]'
    all='(//input[@class="mantine-1cu6yj8 mantine-Radio-radio"])[1]'
    note='(//input[@class="mantine-1cu6yj8 mantine-Radio-radio"])[2]'   
    log='(//input[@class="mantine-1cu6yj8 mantine-Radio-radio"])[3]'
    add_Note='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-191riys"]'
    enter_Note='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[5]'
    add_Note_button='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-hm5rmx"]'


    searchByStatus(status){
        cy.xpath(this.search_By_Status).type(status).type('{downArrow}{enter}')
        cy.wait(3000)
        cy.xpath(this.unselect).click()
    }


    searchByClaimNumber(number){
        cy.xpath(this.search_By_ClaimNumber).type(number).type('{enter}')
        cy.wait(3000)
        cy.xpath(this.search_By_ClaimNumber).type('{selectAll}{backspace}')
        cy.wait(3000)
    }
    

    selectFilter(){
        cy.xpath(this.filter).click()
    }
    searchByInsured(insured){
        cy.xpath(this.search_By_Insured).type(insured).type('{downArrow}{enter}')
        cy.wait(3000)
    }
    searchByInsurer(insurer){
        cy.xpath(this.search_By_Insurer).type(insurer).type('{downArrow}{enter}')
        cy.wait(3000)
    }
    searchByProcessor(processor){
        cy.xpath(this.search_By_Processor).type(processor).type('{downArrow}{enter}')
        cy.wait(3000)
    }
    searchBySurveyor(surveyor){
        cy.xpath(this.search_By_Surveyor).type(surveyor).type('{downArrow}{enter}')
        cy.wait(3000)
    }
    searchByClaimAge(claimAge){
        cy.xpath(this.search_By_ClaimAge).type(claimAge).type('{downArrow}{enter}')
        cy.wait(3000)
    }
    selectUnfilter(){
        cy.xpath(this.unfilter).click()
        cy.wait(3000)
    }


    selectClaim(){
        cy.xpath(this.claim_Select).click()
    }
    selectNotes(){
        cy.xpath(this.notes).click()
    }

    radioAll(){
        cy.xpath(this.all).click()
        cy.wait(3000)
    }
    radioNote(){
        cy.xpath(this.note).click()
        cy.wait(3000)
    }
    radioLog(){
        cy.xpath(this.log).click()
        cy.wait(3000)
    }
    addNote(add){
        cy.xpath(this.add_Note).click()
        cy.xpath(this.enter_Note).type(add)
        cy.xpath(this.add_Note_button).click()
    }

}