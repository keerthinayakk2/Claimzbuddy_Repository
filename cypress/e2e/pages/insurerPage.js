export class InsurerClass{

    // Create Insurer
	
     insurer="Insurer"
	 add_Insurer="Add Insurer"
	 name="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[1]/div/input"
	 last_Name="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[2]/div/input"
	 branch_Office="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[3]/div/textarea"
	 email="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[4]/div/input"
	 contact="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[5]/div/input"
	 description="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[6]/div/input"
	 additional_Email="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[7]/div/div/div[1]/div/input"
	 add_Email="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[7]/div/div/div[1]/div/div"
	 additional_Contact="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[8]/div/div/div[1]/div/input"
	 add_Contact="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[8]/div/div/div[1]/div/div"
	 add_New_Insurer="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/button/div"

	

	
	
	
	// Search
     search="/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div/input"
	// Edit Insurer
     edit="/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr[1]/td[7]/div/button[1]"
	 update_Desc="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[6]/div/input"
	 update_Insurer="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/button/div"
	// Delete Insurer
     delete="/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr[1]/td[7]/div/button[2]"
	 confirm_Delete="/html/body/div[4]/div/div/div/div[2]/section/div[2]/div/button[2]/div/span"	


     // Creation of Insurer
    clickOnInsurer(){
        // cy.wait(5000)
        cy.contains(this.insurer).click()

    }
    clickOnAddInsurer(){
        cy.contains(this.add_Insurer).click()
    }

    enterName(enter_Name){
        cy.xpath(this.name).type(enter_Name)

    }
    enterLastName(lastName){
        cy.xpath(this.last_Name).type(lastName)
    }
    enterBranchOffice(branchOffice){
        cy.xpath(this.branch_Office).type(branchOffice)
    }
    enterEmail(enter_Email){
        cy.xpath(this.email).type(enter_Email)
    }
    
    enterContact(enterContact){
        cy.xpath(this.contact).type(enterContact)
    }
    
    enterDesc(enter_Desc){
        cy.xpath(this.description).type(enter_Desc)
    }
    enterAdditionalEmail(additionalEmail){
        cy.xpath(this.additional_Email).type(additionalEmail)
        cy.xpath(this.add_Email).click()

    }
    enterAdditionalContact(additionalContact){
        cy.xpath(this.additional_Contact).type(additionalContact)
        // cy.wait(3000)
        cy.xpath(this.add_Contact).click()

    }
    addNewInsurer(){
        cy.xpath(this.add_New_Insurer).click()
    }


    // Search For Insurer
    searchForInsurer(searchInsurer){
        cy.xpath(this.search).type('{selectAll}{backspace}').type(searchInsurer)
        cy.wait(5000)
    }

// Update Insurer
clickOnEdit(){
    cy.xpath(this.edit).click()
}


updateDesc(desc){
    cy.xpath(this.update_Desc).type('{selectAll}{backspace}').type(desc)
}


updateInsurer(){
    cy.xpath(this.update_Insurer).click()
}

// Search for Insurer

// Delete Insurer

deleteInsurer(){
    cy.xpath(this.delete).click()
    cy.xpath(this.confirm_Delete).click()
}
}