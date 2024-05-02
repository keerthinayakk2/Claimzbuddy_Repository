import { LoginClass } from './pages/loginPage'
import { ClaimsTimelineClass } from './pages/claimsTimelinePage'
import { SpectrumMainClass } from "./pages/spectrumMainPage"
const loginPage=new LoginClass()
const claimsTimelinePage=new ClaimsTimelineClass()
const spectrumMainPage=new SpectrumMainClass()
beforeEach(function(){
    cy.visit('https://spectrum-adv.dev.claimzbuddy.com')
  })
  
  describe('ClaimTimeline Test', () => {
    it('ClaimTimeline ', () => {


        loginPage.enterUserName('a.verma')
        loginPage.enterPassword('test1234')
        loginPage.clickOnLogin()

        spectrumMainPage.clickOnAbcCorp()
        spectrumMainPage.switchTo()
        spectrumMainPage.clickOnSpectrum()

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