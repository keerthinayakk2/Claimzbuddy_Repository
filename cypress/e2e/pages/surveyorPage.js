export class SurveyorClass{

    // Create Surveyor
	
	 click_Surveyor="Surveyor"
	 add_Surveyor="Add Surveyor"
	
	 name="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[1]/div[1]/div/input"
	 last_Name="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[1]/div[2]/div/input"
	 branch_Office="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[2]/div/textarea"
	 email="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[3]/div/input"
	 contact="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[4]/div/input"
	 additional_Email="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[5]/div/div/div[1]/div/input"
	 add_Email="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[5]/div/div/div[1]/div/div"
	 additional_Contact="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[6]/div/div/div[1]/div/input"
	 add_contact="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[6]/div/div/div[1]/div/div"
	 add_NewSurveyor="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/button/div/span"
	// Search
	 search="/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div/input"
	// Edit Surveyor
	 edit="/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr/td[6]/div/button[1]"
	 short_Name="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[1]/div[1]/div/input"
	 long_Name="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[1]/div[2]/div/input"
	 branch="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[2]/div/textarea"
	 update_Surveyor="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/button/div/span"
	// Delete Surveyor
	 delete="/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr/td[6]/div/button[2]"
	 confirm_Delete="/html/body/div[4]/div/div/div/div[2]/section/div[2]/div/button[2]/div/span"	
     msg1="Successfully added Surveyor"
     msg2="Successfully updated Surveyor"
     msg3="Successfully deleted Surveyor"

     // Creation of Surveyor
    clickOnSurveyor(){
        // cy.wait(5000)
        cy.contains(this.click_Surveyor).click()

    }
    clickOnAddSurveyor(){
        cy.contains(this.add_Surveyor).click()
    }

    enterFirstName(enterName){
        cy.xpath(this.name).type(enterName)
    }
    enterLastName(lastName){
        cy.xpath(this.last_Name).type(lastName)
    }
    enterBranchOffice(branchOffice){
        cy.xpath(this.branch_Office).type(branchOffice)
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
        cy.xpath(this.add_contact).click()

    }
    addNewSurveyor(){
        cy.xpath(this.add_NewSurveyor).click()
        cy.contains(this.msg1).should('have.text','Successfully added Surveyor')
        cy.log('Successfully added Surveyor')
    }


    // Search For Surveyor
    searchForSurveyor(searchSurveyor){
        cy.xpath(this.search).type('{selectAll}{backspace}').type(searchSurveyor)
        cy.wait(5000)
    }

// Update Surveyor
clickOnEdit(){
    cy.xpath(this.edit).click()
}


addLongName(longName){
    cy.xpath(this.long_Name).type('{selectAll}{backspace}').type(longName)
}

addBranch(add_branch){
    cy.xpath(this.branch).type(add_branch)
    
}

updateSurveyor(){
    cy.xpath(this.update_Surveyor).click()
    cy.contains(this.msg2).should('have.text','Successfully updated Surveyor')
        cy.log('Successfully updated Surveyor')
}

// Search for Surveyor

// Delete Surveyor

deleteSurveyor(){
    cy.xpath(this.delete).click()
    cy.xpath(this.confirm_Delete).click()
    cy.contains(this.msg3).should('have.text','Successfully deleted Surveyor')
    cy.log('Successfully deleted Surveyor')
}
}