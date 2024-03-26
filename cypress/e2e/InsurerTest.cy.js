import {LoginClass} from "./pages/loginPage"
import { SurveyorClass, UserClass } from "./pages/insuredPage"
import { InsurerClass } from "./pages/insurerPage"
const loginPage=new LoginClass()
const insurerPage=new InsurerClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('Insurer Test', () => {
    it('Insurer', () => {
  
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

      insurerPage.clickOnInsurer()
      insurerPage.clickOnAddInsurer()
      insurerPage.enterName('Renuka')
      insurerPage.enterLastName('Renuka Life Insurance')
      insurerPage.enterBranchOffice('Bengaluru')
      insurerPage.enterEmail('keerthinayakk2@gmail.com')
      insurerPage.enterContact('8978678960')
      insurerPage.enterDesc('Test1234')
      insurerPage.enterAdditionalEmail('keerthinayakk2@gmail.com')
      insurerPage.enterAdditionalContact('8976567898')
      insurerPage.addNewInsurer()

// Search For Inusrer

insurerPage.searchForInsurer('Renuka Life Insurance')

// Update Inusrer

insurerPage.clickOnEdit()
insurerPage.updateDesc('Test')
insurerPage.updateInsurer()

// Search For Inusrer

insurerPage.searchForInsurer('Renuka Life Insurance')


// Delete Inusrer

insurerPage.deleteInsurer()


     
      // cy.wait(700)
      // cy.xpath('/html/body/div[1]/div/div/form/div[1]/div/input').click()
    })
  })