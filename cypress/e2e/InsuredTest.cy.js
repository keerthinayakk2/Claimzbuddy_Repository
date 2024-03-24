import {LoginClass} from "./pages/loginPage"
import { SurveyorClass, UserClass } from "./pages/insuredPage"
import { InsuredClass } from "./pages/insuredPage"
const loginPage=new LoginClass()
const insuredPage=new InsuredClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('Insured Test', () => {
    it('Insured', () => {
  
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

      insuredPage.clickOnInsured()
      insuredPage.clickOnAddInsured()
      insuredPage.enterGroupName('Group')
      insuredPage.enterPolicyHolder('Suresh Kumar')
      insuredPage.enterContactPerson('Abhishek Kumar')
      insuredPage.enterEmail('keerthinayakk2@gmail.com')
      insuredPage.enterContact('7600008879')
      insuredPage.enterAdditionalEmail('keerthinayakk2@gmail.com')
      insuredPage.enterAdditionalContact('8976567898')
      insuredPage.addNewInsured()

// Search For Insured

insuredPage.searchForInsured('Suresh Kumar')

// Update Insured

insuredPage.clickOnEdit()
insuredPage.clickOnEditPerson(' R')
insuredPage.updateInsured()

// Search For Insured

insuredPage.searchForInsured('Suresh Kumar')
// Delete Surveyor

insuredPage.deleteInsured()


     
    })
  })