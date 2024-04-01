import {LoginClass} from './pages/loginPage'
import { ReviewClass } from './pages/reviewPage'
const loginPage=new LoginClass()
const reviewPage=new ReviewClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('Review Test', () => {
    it('Review Test', () => {
  
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

      reviewPage.reviewSelect()
      reviewPage.claimStatus('ASSESSMENT_AWAITED')
      reviewPage.selectInsured('Apoorva Vasishta')
      reviewPage.claimAge('90 Days')
      
      
      reviewPage.reviewAll()
      reviewPage.selectAll()
      reviewPage.reviewClick()
      reviewPage.reviewMessage('Test 123')
      reviewPage.assignTo('keerthi nayak')
      reviewPage.actionableDate('1')
      reviewPage.addReview()
      reviewPage.reviewAll()

      //Submitting Review

      reviewPage.submitReview()
      reviewPage.selectDuration('2 hours ago')
      reviewPage.submitAfterSelectingDuration()
      reviewPage.EmailAddress('keerthinayakk2@gmail.com')
      reviewPage.sendEmail()
      
    })
})