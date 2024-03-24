export class InsuredClass{

    // Create Insured
	
     insured="Insured"
	 add_Insured="Add Insured"
	 group_Name="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[1]/div/div/input"
	//  group_Name_Select="//div[@class='mantine-Input-wrapper mantine-Select-wrapper mantine-1v7s5f8']//input[@value='Kickstart']"
     policy_Holder="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[2]/div/input"
	 contact_Person="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[3]/div[1]/input"
	 email="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[4]/div[1]/input"
	 contact="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[5]/div[1]/input"
	 additional_Email="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[6]/div/div/div[1]/div/input"
	 add_Email="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[6]/div/div/div[1]/div/div"
	 additional_Contact="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[7]/div/div/div[1]/div/input"
	 add_Contact="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[7]/div/div/div[1]/div/div"
	 add_New_Insured="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/button/div/span"
	 
	
	
	
	
	
	
	// Search
	 search="/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div/input"
	// Edit Insured
	 edit="/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr/td[6]/div/button[1]"
	 edit_person="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[3]/div/input"
	 update="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/button/div/span"
    
    // Delete Insured
     delete="/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr/td[6]/div/button[2]"
	 confirm_Delete="/html/body/div[4]/div/div/div/div[2]/section/div[2]/div/button[2]/div/span"
     assert_msg1='Successfully added Insured'
     assert_msg2='Successfully updated Insured'
     assert_msg3='Successfully deleted Insured'
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
        cy.contains(this.assert_msg1).should('have.text',"Successfully added Insured")
        cy.log("Succsessfully added Insured")
    }


    // Search For Insured
    searchForInsured(searchInsured){
        cy.xpath(this.search).type('{selectAll}{backspace}').type(searchInsured)
        cy.wait(5000)
    }

// Update Insured
clickOnEdit(){
    cy.xpath(this.edit).click()
}


clickOnEditPerson(editPerson){
    cy.xpath(this.edit_person).type(editPerson)
}



updateInsured(){
    cy.xpath(this.update).click()
    cy.contains(this.assert_msg2).should('have.text',"Successfully updated Insured")
    cy.log("Succsessfully updated Insured")
}

// Delete Insured

deleteInsured(){
    cy.xpath(this.delete).click()
    cy.xpath(this.confirm_Delete).click()
    cy.contains(this.assert_msg3).should('have.text',"Successfully deleted Insured")
        cy.log("Succsessfully deleted Insured")
}
}