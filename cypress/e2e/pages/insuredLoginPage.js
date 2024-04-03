export class InsuredLoginClass{

	assert_msg1='Successfully added Insured'
    //search

     //Create User
     create_User='/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr/td[6]/div/button[3]/div/span'
     first_Name='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[1]/div[1]/div/input'
     last_Name='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[1]/div[2]/div/input'
     primary_Email_User='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[2]/div/input'
     user_Name='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[3]/div[1]/div/input'
     password_User='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[3]/div[2]/div/div[1]/input'
     add_New_User='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/button/div/span'
     assert_msg2='Successfully added user'

     //Search User
     click_User='Users'
     search_by_user='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div[1]/div/input'
     profile='/html/body/div[1]/div/header/div/button/div/div[2]/div[2]'
     logout='Logout'

     //Login as Insured User

    // userName='/html/body/div[1]/div/div/form/div[1]/div/input'
    // password='/html/body/div[1]/div/div/form/div[2]/div/div[1]/input'
    // login='/html/body/div[1]/div/div/form/button/div'
    old_Password='/html/body/div[3]/div/div/div/div[2]/section/div[2]/form/div[1]/div/div[1]/input'
    new_Password='/html/body/div[3]/div/div/div/div[2]/section/div[2]/form/div[2]/div/div[1]/input'
    confirm_Password='/html/body/div[3]/div/div/div/div[2]/section/div[2]/form/div[3]/div/div[1]/input'
    submit='/html/body/div[3]/div/div/div/div[2]/section/div[2]/form/button/div'
    assert_msg3='Password changed! Please login with your new password'
    // Login again
// userName='/html/body/div[1]/div/div/form/div[1]/div/input'
    // password='/html/body/div[1]/div/div/form/div[2]/div/div[1]/input'
    // login='/html/body/div[1]/div/div/form/button/div'

    intimation='Intimation'
    click_Intimation='/html/body/div[1]/div/div/main/div/div/div[1]/button'
    details='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[1]'
    policy_Number='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-gszoqu"])[1]'
    date='(//button[@class="mantine-DateTimePicker-input mantine-Input-input mantine-DateTimePicker-input mantine-1e6hn20"])[1]'
    date_select='13'
    select_Date='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-8waimi"])'
    cause='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[2]'
    cause_Des='Accidental fall'
    loss='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-gszoqu"])[2]'
    description='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[2]'
    contact_Details='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[3]'
    contact_Person_Location='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-gszoqu"])[3]'
    contact_Person_Number='(//input[@class="mantine-Input-input mantine-TextInput-input mantine-gszoqu"])[4]'
	location='(//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"])[3]'
    assert_msg4='Successfully created proposal'
    edit_inti='/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr/td[14]/div/a/button'
    attachments='Attachments'
     attach_File='//input[@type="file"][1]'
    submit_Proposal='Submit Proposal'
    assert_msg5='File has been successfully uploaded'
    //click on intimation
    //logout again

    //login as admin
    //check intimation
    click_On_Edit='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-1g9r2on"])[1]'
    policy='/html/body/div[1]/div/div/main/div/div/form/div[2]/div[2]/div/div[1]/div[1]/div[2]/div/div/input'
    policy_Num='//input[@placeholder="Enter Policy Number"]'
    policy_Type='//input[@placeholder="Select Policy Type"]'
    insurer='//input[@placeholder="Select a Insurer"]'
    // policy_Hold='/html/body/div[13]/div/div/div/div[2]/section/div[2]/form/div[4]/div/div/input'
    insured_Amount='//input[@placeholder="Enter Insured Amount"]'
    line_Of_Business='//input[@placeholder="Select Line Of Business"]'
    start_Date='//input[@placeholder="Start Date"]'
    end_Date='//input[@placeholder="End Date"]'
    duration='//input[@placeholder="Enter Policy Duration"]'
    create_New_Policy='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-d21wnh"]'
    insurer_Select='//input[@placeholder="Select Insurer"]'
    occupancy='//input[@placeholder="Select Occupancy"]'


    convert_Claim='Convert to Claim'
    assert_msg6='Successfully converted proposal'
    assert_msg7='Successfully added policy'
    //logout again
    //login as insured user

    claim='Claim'
   

     // Creation of Insured
    clickOnInsured(){
        // cy.wait(5000)
        cy.contains(this.insured).click()

    }
    clickOnAddInsured(){
        cy.contains(this.add_Insured).click()
    }

    enterGroupName(groupName){
        cy.xpath(this.group_Name).type(groupName).type('{downarrow}{enter}')
        // cy.xpath(this.group_Name_Select).click()
    }
    enterPolicyHolder(policyHolder){
        cy.xpath(this.policy_Holder).type(policyHolder)
    }
    enterContactPerson(contactPerson){
        cy.xpath(this.contact_Person).type(contactPerson)
    }
    enterEmail(primaryEmail){
        cy.xpath(this.email).type(primaryEmail)
    }
    
    enterContact(enterContact){
        cy.xpath(this.contact).type(enterContact)
    }
    
    enterAdditionalEmail(additionalEmail){
        cy.xpath(this.additional_Email).type(additionalEmail)
        cy.xpath(this.add_Email).click()

    }
    enterAdditionalContact(additionalContact){
        cy.xpath(this.additional_Contact).type(additionalContact)
        cy.xpath(this.add_Contact).click()

    }
    addNewInsured(){
        cy.xpath(this.add_New_Insured).click()
        cy.contains(this.assert_msg1).should('have.text','Successfully added Insured')
        cy.log('Successfully added Insured')
    }


    // Search For Insured
    searchForInsured(searchInsured){
        cy.xpath(this.search).type('{selectAll}{backspace}').type(searchInsured)
        cy.wait(5000)
    }


// search

//User creation
createUser(){
    cy.xpath(this.create_User).click()
}
enterFirstName(firstName){
    cy.xpath(this.first_Name).type(firstName)
}
enterLastName(lastName){
    cy.xpath(this.last_Name).type(lastName)
}
enterPrimaryEmail(primaryEmailUser){
    cy.xpath(this.primary_Email_User).type(primaryEmailUser)
}
enterUserName(enteruser){
    cy.xpath(this.user_Name).type(enteruser)
}
enterPassword(enterpassword){
    cy.xpath(this.password_User).type(enterpassword)
}
enterNewUser(){
    cy.xpath(this.add_New_User).click()
    cy.contains(this.assert_msg2).should('have.text','Successfully added user')
        cy.log('Successfully added user')
}


//Verify if User is created

verifyUser(){
    cy.contains(this.click_User).click()
}

searchForUser(searchuser){
    cy.xpath(this.search_by_user).type(searchuser)
}

logoutFromProfile(){
    // cy.wait(3000)
    cy.xpath(this.profile).click()
    cy.contains(this.logout).click()
}

// Login as Insured User

enterOldPassword(oldPassword){
    cy.xpath(this.old_Password).type(oldPassword)
}

enterNewPassword(newPassword){
    cy.xpath(this.new_Password).type(newPassword)
}
confirmPassword(confirm){
    cy.xpath(this.confirm_Password).type(confirm)
}

submitPassword()
{
    cy.xpath(this.submit).click()
    cy.contains(this.assert_msg3).should('have.text','Password changed! Please login with your new password')
        cy.log('Password changed! Please login with your new password')
}

// Creating Intimation
    createIntimation(){
        cy.contains(this.intimation).click()
    }
    clickOnIntimation(){
        cy.xpath(this.click_Intimation).click()
    }
    enterDetails(enter_Details){
        cy.xpath(this.details).type(enter_Details)
    }
    enterPolicyNumber(policyNumber){
        cy.xpath(this.policy_Number).type(policyNumber)
    }
    selectDate(date_Time){
        cy.xpath(this.date).click()
        cy.contains(this.date_select).click().type(date_Time).click()

        // cy.wait(2000)
        cy.xpath(this.select_Date).click()
    }
    selectCause(){
        cy.xpath(this.cause).click().type('Accidental Fall').type('{downArrow}{enter}')
        // cy.contains(this.cause_Des).type('{enter}')
    }
    enterLossAmount(loss_amount){
        cy.xpath(this.loss).type(loss_amount)
    }
    enterDescription(desc){
        cy.xpath(this.description).type(desc)
    }
    enterContactDetails(){
        cy.xpath(this.contact_Details).type('{downArrow}{enter}')
    }
    enterContactLocation(enter_Contact_Location){
        cy.xpath(this.contact_Person_Location).type(enter_Contact_Location)
    }
    enterContactPersonNumber(number){
        cy.xpath(this.contact_Person_Number).type(number)
    }
    enterLocation(enter_Location){
        cy.xpath(this.location).type(enter_Location)
    }
    
    
    submitProposal(){
        cy.contains(this.submit_Proposal).click()
        cy.contains(this.assert_msg4).should('have.text','Successfully created proposal')
        cy.log('Successfully created proposal')
    }
    editIntimation(){
        cy.xpath(this.edit_inti).click()
    }
    goToAttachments(){
        cy.contains(this.attachments).click()
        cy.xpath(this.attach_File).attachFile('Screenshot.png')
        // cy.wait(3000)
        cy.contains(this.assert_msg5).should('have.text','File has been successfully uploaded')
        cy.log('File has been successfully uploaded')
    }
    

    // Logout
    // Login as Admin
    // convert to Claim
    intimationEdit(){
        cy.xpath(this.click_On_Edit).click()
        
    }
    policyDetails(enterPolicy){
        cy.xpath(this.policy).type(enterPolicy).type('{downArrow}{enter}')
    }
    enterPolicyNum(policyNum){
        cy.xpath(this.policy_Num).type(policyNum)
    }
    enterPolicyType(policyType){
        cy.xpath(this.policy_Type).type(policyType).type('{downArrow}{enter}')
    }
    selectInsurer(select_Insurer){
        cy.xpath(this.insurer).type(select_Insurer).type('{downArrow}{enter}')
    }
    // selectPolicyHolder(policyHold){
    //     cy.xpath(this.policy_Hold).type(policyHold).type('{downArrow}{enter}')
    // }
    selectInsuredAmount(selectAmount){
        cy.xpath(this.insured_Amount).type(selectAmount)
    }
    selectLineOfBusiness(lineOfBusiness){
        cy.xpath(this.line_Of_Business).type(lineOfBusiness).type('{downArrow}{enter}')
    }
    selectStartDate(startDate){
        cy.xpath(this.start_Date).type(startDate,'{enter}')
        // cy.contains(this.date1).click({timeout:8000})
    }
    selectEndtDate(endDate){
        cy.xpath(this.end_Date).type(endDate,'{enter}')
        // cy.contains(this.date2).click({timeout:8000})
    }
    selectDuration(durationSelect){
        cy.xpath(this.duration).type(durationSelect)
    }
    createPolicy(){
        cy.xpath(this.create_New_Policy).click()
        // cy.wait(3000)
        cy.contains(this.assert_msg1).should('have.text','Successfully added policy')
        cy.log('Successfully added policy')
    }
    // enterPolicyDetails(detailsPolicy){
    //     cy.wait(3000)
    //     cy.xpath(this.policy).type(detailsPolicy).type('{downArrow}{enter}')
    // }
    // insurerSelect(select_type){
    //     cy.xpath(this.insurer_Select).type(select_type).type('{downArrow}{enter}')
    // }
    selectOccupancy(select_Occupancy){
        // cy.wait(3000)
        cy.xpath(this.occupancy).type(select_Occupancy).type('{downArrow}{enter}')
    }
    converToClaim(){
        cy.contains(this.convert_Claim).click()
        cy.contains(this.assert_msg6).should('have.text','Successfully converted proposal')
        cy.log('Successfully converted proposal')
    }
    
    clickOnClaim(){
        cy.contains(this.claim).click()
    }

    //Logout and Login as Insured User
// Search for Insured


}