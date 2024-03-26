import { LoginClass } from './pages/loginPage'
import { ClaimsTimelineClass } from './pages/claimsTimelinePage'
const loginPage=new LoginClass()
const claimsTimelinePage=new ClaimsTimelineClass()

beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('ClaimTimeline Test', () => {
    it('ClaimTimeline ', () => {


        loginPage.enterUserName('keerthi.nayak')
        loginPage.enterPassword('Keerthi@02')
        loginPage.clickOnLogin()
        claimsTimelinePage.selectClaim()
        claimsTimelinePage.selectTimeline()
        claimsTimelinePage.dateOfIncident()
        claimsTimelinePage.dateOfIntimation()
        claimsTimelinePage.dateOfIntimationInsurer()
        claimsTimelinePage.dateOfSurveyor()
        claimsTimelinePage.dateOfSurvey()
        claimsTimelinePage.dateOfLOR()
        claimsTimelinePage.dateOfFinalSubmission()
        claimsTimelinePage.dateOfAssessmentReceived()
        claimsTimelinePage.dateOfConsent()
        claimsTimelinePage.dischargeVoucherReceived()
        claimsTimelinePage.dischargeVoucherSubmitted()
        claimsTimelinePage.settlementAmount()
        claimsTimelinePage.saveTimeline()


            
        
    })
})