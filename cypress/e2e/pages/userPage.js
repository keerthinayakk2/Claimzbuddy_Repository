export class UserClass{
// Elements of Creating new user
    user_click='Users'
    add_user='Add User'
    first_name='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[1]/div[1]/div/input'
    last_name='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[1]/div[2]/div/input'
    primary_email='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[2]/div/input'
    user_name='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[3]/div[1]/div/input'
    password='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[3]/div[2]/div/div[1]/input'
    click_user='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[4]/div/div/div[1]/div/input'
    user_role='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[4]/div/div/div[1]/div/div'
    additional_email='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[5]/div/div/div[1]/div/input'
    select_email='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[5]/div/div/div[1]/div/div'
    additional_contact='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[6]/div/div/div[1]/div/input'
    select_contact='/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[6]/div/div/div[1]/div/div'
    add_new_user="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/button/div/span"

    // Element to serach
    search="/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div[1]/div/input"
    search_By_insured='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div[2]/div/div/input'
    remove_insured='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div[2]/div/div/div/button'
    search_By_user='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div[3]/div/div/input'
    remove_user='/html/body/div[1]/div/div/main/div/div/div[1]/div[2]/div[3]/div/div/div/button'
// Element to Update
    edit_user="/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr/td[7]/div/button[1]"
    edit_email="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[2]/div/input"
    // add_primary_email="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[5]/div/div/div[1]/div/div"
    user_select="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[4]/div/div/div[1]/div"
    type_of_user="ADMINISTRATOR"
    // /html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[4]/div/div/div[1]/div/div[2]
    // additional_contact="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[6]/div/div/div[1]/div/input"
    // additional_email="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[5]/div/div/div[1]"
    // additional_email_click="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[5]/div/div/div[1]/div/div[2]"
    // addAdditional_contact="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/div[6]/div/div/div[1]/div/div"
    update_user="/html/body/div[4]/div/div/div/div[2]/section/div[2]/form/button/div/span"

    delete="/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr/td[7]/div/button[2]"
    confirm_delete="/html/body/div[4]/div/div/div/div[2]/section/div[2]/div/button[2]/div/span"

    msg1="Successfully added user"
     msg2="Successfully updated user"
     msg3="Successfully deleted user"

// Creation of User
    clickOnUsers(){
        // cy.wait(5000)
        cy.contains(this.user_click).click()
        // cy.get(this.user_click).click()

    }
    clickOnAddUser(){
        cy.contains(this.add_user).click()
    }

    enterFirstName(firstName){
        cy.xpath(this.first_name).type(firstName)
    }
    enterLastName(lastName){
        cy.xpath(this.last_name).type(lastName)
    }
    enterPrimaryEmail(primaryEmail){
        cy.xpath(this.primary_email).type(primaryEmail)
    }
    enterUserName(userName){
        cy.xpath(this.user_name).type(userName)
    }
    enterPassword(enterPassword){
        cy.xpath(this.password).type(enterPassword)
    }
    selectUserRole(){
        cy.xpath(this.click_user).click()
        cy.xpath(this.user_role).click()
    }
    enterAdditionalEmail(additionalEmail){
        cy.xpath(this.additional_email).type(additionalEmail)
        cy.xpath(this.select_email).click()

    }
    enterAdditionalContact(additionalContact){
        cy.xpath(this.additional_contact).type(additionalContact)
        cy.xpath(this.select_contact).click()

    }
    addNewUser(){
        cy.xpath(this.add_new_user).click()
        cy.contains(this.msg1).should('have.text','Successfully added user')
    cy.log('Successfully added user')
    }


    // Search For User
    searchForUser(searchUser){
        cy.xpath(this.search).type('{selectAll}{backspace}').type(searchUser)
    }
    searchByInsured(searchInsured){
        cy.xpath(this.search_By_insured).type(searchInsured).type('{downArrow}{enter}')
        cy.xpath(this.remove_insured).click()
    }

    searchByUserType(searchUserType){
        cy.xpath(this.search_By_user).type(searchUserType).type('{downArrow}{enter}')
        cy.xpath(this.remove_user).click()
    }

// Update User
clickOnUser(){
    cy.xpath(this.edit_user).click()
}

ClickOnEditEmail(editEmail){
    cy.xpath(this.edit_email).type('{selectAll}{backspace}').type(editEmail)
}

// addPrimaryEmail(primary_Email){
//     cy.xpath(this.add_primary_email).type(primary_Email)
// }

selectTypeOfUser(){
    cy.xpath(this.user_select).click()
    cy.wait(5000)
    cy.contains(this.type_of_user).click()
    
}

updateUser(){
    cy.xpath(this.update_user).click()
    cy.contains(this.msg2).should('have.text','Successfully updated user')
    cy.log('Successfully updated user')
}

// Search for user

// Delete User

deleteUser(){
    cy.xpath(this.delete).click()
    cy.xpath(this.confirm_delete).click()
    cy.contains(this.msg3).should('have.text','Successfully deleted user')
    cy.log('Successfully deleted user')
}

}