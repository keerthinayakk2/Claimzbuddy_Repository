import {LoginClass} from "./pages/loginPage"
import { SurveyorClass, UserClass } from "./pages/surveyorPage"
const loginPage=new LoginClass()
const surveyorPage=new SurveyorClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('Surveyor Test', () => {
    it('Surveyor', () => {
  
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

      surveyorPage.clickOnSurveyor()
      surveyorPage.clickOnAddSurveyor()
      surveyorPage.enterFirstName('Vikram M Kumar')
      surveyorPage.enterLastName('Vikram Manjunath Kumar')
      surveyorPage.enterBranchOffice('Bengaluru')
      surveyorPage.enterEmail('keerthinayakk2@gmail.com')
      surveyorPage.enterContact('8978678960')
      surveyorPage.enterAdditionalEmail('keerthinayak68@gmail.com')
      surveyorPage.enterAdditionalContact('8967898767')
      surveyorPage.addNewSurveyor()

// Search For Surveyor

surveyorPage.searchForSurveyor('Vikram Manjunath Kumar')

// Update Surveyor

surveyorPage.clickOnEdit()
surveyorPage.addLongName('Vikram Manjunath Kumara')
surveyorPage.addBranch(' South')
surveyorPage.updateSurveyor()

// Search For Surveyor

surveyorPage.searchForSurveyor('Vikram Manjunath Kumar')


// Delete Surveyor

surveyorPage.deleteSurveyor()


     
    })
  })