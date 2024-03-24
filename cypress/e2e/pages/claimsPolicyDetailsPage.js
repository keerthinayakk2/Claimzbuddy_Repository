
export class ClaimsPolicyDetailsClass{

    claim_Select='(//a[@class="mantine-Text-root mantine-Anchor-root mantine-qdotc7"])[1]'
    policy_Details='(//button[@class="mantine-UnstyledButton-root mantine-Tabs-tab mantine-1cwk9zn"])[3]'
    show_Details='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-1wy6b2y"]'
    lob='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[10]'
    update='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-asjeru"]'
    ref_Email='//div[@class="mantine-1uduolt mantine-MultiSelect-values"]'
    remove_Email='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-CloseButton-root mantine-MultiSelect-defaultValueRemove mantine-1dns9vs"])[2]'
    
    expand='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-18ai6yf"])[2]'
    sum_Assured='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-gszoqu"])[10]'
    insured_Property='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[5]'
    remarks='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[6]'
    sum_Assured2='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-gszoqu"])[11]'
    insured_Property2='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[7]'
    remarks2='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[8]'
    delete='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-18pc0xv"])[2]'

    selectClaim(){
        cy.xpath(this.claim_Select).click()
    }
    selectPolicyDetails(){
        cy.xpath(this.policy_Details).click()
    }
    showDetails(){
        cy.xpath(this.show_Details).click()
    }
    lineOfBusiness(line){
        cy.xpath(this.lob).click().type('{selectAll}{backspace}').type(line).type('{downArrow}{enter}')

    }
    updateDetails(){
        cy.xpath(this.update).click()
    }

    addReferenceEmail(email){
        cy.xpath(this.ref_Email).click().type(email).type('{downArrow}{enter}')
    }
    removeEmail(){
        cy.xpath(this.remove_Email).click()
    }

    expandIcon(){
        cy.xpath(this.expand).click()
    }
    sumAssured(sum){
        cy.xpath(this.sum_Assured).type(sum)
    }
    insuredProperty(property){
        cy.xpath(this.insured_Property).type(property)
    }
    addRemarks(add){
        cy.xpath(this.remarks).type(add)
    }
    sumAssured2(sum2){
        cy.xpath(this.sum_Assured2).type(sum2)
    }
    insuredProperty2(property2){
        cy.xpath(this.insured_Property2).type(property2)
    }
    addRemarks2(add2){
        cy.xpath(this.remarks2).type(add2)
    }
    deleteIcon(){
        cy.xpath(this.delete).click()
    }
}