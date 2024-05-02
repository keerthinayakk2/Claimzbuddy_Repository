import {LoginClass} from "./pages/loginPage"
import { AllFunctionalitiesClass } from "./pages/allFunctionalitiesPage"
const loginPage=new LoginClass()
const allFunctionalitiesPage=new AllFunctionalitiesClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('All Functionalities', () => {
    it('All Functionalities', () => {
  
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

      allFunctionalitiesPage.clickOnUsers()
      allFunctionalitiesPage.clickOnSurveyor()
      allFunctionalitiesPage.clickOnInsurer()
      allFunctionalitiesPage.clickOnInsured()
      allFunctionalitiesPage.clickOnReview()
      allFunctionalitiesPage.clickOnNotifications()
      allFunctionalitiesPage.clickOnActions()
      allFunctionalitiesPage.clickOnIntimation()
      allFunctionalitiesPage.clickOnClaims()


     
    })
  })