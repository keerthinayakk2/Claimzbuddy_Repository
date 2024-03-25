export class ClaimsPaymentDetailsShareClass{
// add payment
select_Claim='(//a[@class="mantine-Text-root mantine-Anchor-root mantine-qdotc7"])[1]'
select_Payment_Details='(//button[@class="mantine-UnstyledButton-root mantine-Tabs-tab mantine-1cwk9zn"])[6]'
kyc_Submitted='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[1]'
date_Select='(//td[@class="mantine-5rrl7o mantine-Month-monthCell mantine-DatePickerInput-monthCell"])[26]'
subrogation_Bond='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[2]'

add_Payment='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-1wy6b2y"])[1]'
date_Of_Remittance='(//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"])[3]'
type_Of_Settlement='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[8]'
mode_Of_Settlement='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[9]'
amount_Remitted='//input[@class="mantine-Input-input mantine-NumberInput-input mantine-gszoqu"]'
cheque_No='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-gszoqu"])[7]'
add='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-g7194"])[2]'
assert1='Successfully added payment'
//update payment
edit='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-1g9r2on"])[1]'
update='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-g7194"])[2]'
assert2='Successfully updated payment'
//delete payment
delete_Payment='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-o1cmkh"])[1]'
confirm_Delete='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-1l70tev"])[1]'
assert3='Successfully deleted payment'

//share
select_Share='(//button[@class="mantine-UnstyledButton-root mantine-Tabs-tab mantine-1cwk9zn"])[7]'
add_New_Field='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-1ih9q12"])[1]'
add_Type='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[15]'
add_Value='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[16]'    
delete_Type='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-1tnf75q"])[11]'                                                                                                                                                                                                                                                                                                                                                                                                          

choose_Existing_Field='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-1ih9q12"])[2]'
policy_Start_Date='(//input[@type="checkbox"])[2]'
update_Field='(//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-g7194"])[2]'

loss_Description='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[9]'

share_With_Insurer='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-3ugbw3"]'
email='(//div[@class="mantine-1n7zxp mantine-MultiSelect-values"])[1]'
share='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-sa3oaj"]'
assert4='Email sent successfully'



// add payment
selectClaim(){
    cy.xpath(this.select_Claim).click()
}
selectPaymentDetails(){
    cy.xpath(this.select_Payment_Details).click()
}
kycSubmitted(){
    cy.xpath(this.kyc_Submitted).click()
    cy.wait(2000)
    cy.xpath(this.date_Select).click()
}
subrogationBond(){
    cy.xpath(this.subrogation_Bond).click()
    cy.wait(2000)
    cy.xpath(this.date_Select).click()
}

addPayment(){
    cy.xpath(this.add_Payment).click()
}
dateOfRemittance(){
    cy.xpath(this.date_Of_Remittance).click()
    cy.xpath(this.date_Select).click()
}
typeOfSettlement(type){
    cy.xpath(this.type_Of_Settlement).click().type(type).type('{downArrow}{enter}')
}
modeOfSettlement(mode){
    cy.xpath(this.mode_Of_Settlement).click().type(mode).type('{downArrow}{enter}')
}
amountRemitted(amount){
        cy.xpath(this.amount_Remitted).click().type('{selectAll}{backspace}').type(amount)
    
}
chequeNumber(num){
    cy.xpath(this.cheque_No).click().type(num)
}
addNewPayment(){
    cy.xpath(this.add).click()
}
addPaymentAssertion(){
    cy.contains(this.assert1).should('have.text','Successfully added payment')
    cy.log('Successfully added payment')
}

//update payment
editPayment(){
    cy.xpath(this.edit).click()
}
updatePayment(){
    cy.xpath(this.update).click()
}

updatePaymentAssertion(){
    cy.contains(this.assert2).should('have.text','Successfully updated payment')
    cy.log('Successfully updated payment')
}

//delete payment
deletePayment(){
    cy.xpath(this.delete_Payment).click()
}
confirmDelete(){
    cy.xpath(this.confirm_Delete).click()
}
// deletePaymentAssertion(){
//     cy.contains(this.assert3).should('have.text','Successfully deleted payment')
//     cy.log('Successfully deleted payment')
// }

//share
selectShare(){
    cy.xpath(this.select_Share).click()
}

addNewField(){
    cy.xpath(this.add_New_Field).click()
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.wait(3000)
}
addNewType(newType){
    cy.xpath(this.add_Type).click().type(newType)
}
addValue(val){
    cy.xpath(this.add_Value).click().type(val)
}
deleteType(){
    cy.wait(2000)
    cy.xpath(this.delete_Type).click()
    cy.wait(3000)
}

chooseExistingField(){
    cy.xpath(this.choose_Existing_Field).click()
    cy.xpath(this.policy_Start_Date).click()
    cy.xpath(this.update_Field).click()
}

lossDescription(desc){
    cy.xpath(this.loss_Description).type(desc)
}

shareWithInsurer(mail){
    cy.xpath(this.share_With_Insurer).click()
    cy.scrollTo('top')
    cy.xpath(this.email).click().type('{backspace}').type(mail).type('{downArrow}{enter}')
    cy.xpath(this.share).click()
}
emailAssertion(){
    cy.contains(this.assert4).should('have.text','Email sent successfully')
    cy.log('Email sent successfully')
}

}