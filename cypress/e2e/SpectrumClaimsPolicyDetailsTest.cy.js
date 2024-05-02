import { LoginClass } from './pages/loginPage'
import { ClaimsPolicyDetailsClass } from './pages/claimsPolicyDetailsPage'
import { SpectrumMainClass } from "./pages/spectrumMainPage"
const loginPage=new LoginClass()
const claimsPolicyDetailsPage=new ClaimsPolicyDetailsClass()
const spectrumMainPage=new SpectrumMainClass()
beforeEach(function(){
    cy.visit('https://spectrum-adv.dev.claimzbuddy.com')
  })
  
  describe('ClaimPolicyDetails Test', () => {
    it('PolicyDetails', () => {


        loginPage.enterUserName('a.verma')
        loginPage.enterPassword('test1234')
        loginPage.clickOnLogin()

        spectrumMainPage.clickOnAbcCorp()
        spectrumMainPage.switchTo()
        spectrumMainPage.clickOnSpectrum()

        claimsPolicyDetailsPage.selectClaim()
        claimsPolicyDetailsPage.selectPolicyDetails()
        claimsPolicyDetailsPage.showDetails()
        claimsPolicyDetailsPage.showDetails()
        claimsPolicyDetailsPage.lineOfBusiness('FIRE')
        claimsPolicyDetailsPage.updateDetails()
        claimsPolicyDetailsPage.addReferenceEmail('abc@gmail.com')
        // claimsPolicyDetailsPage.addReferenceEmail('abc123@gmail.com')
        claimsPolicyDetailsPage.removeEmail()
        claimsPolicyDetailsPage.expandIcon()
        claimsPolicyDetailsPage.sumAssured('50000')
        claimsPolicyDetailsPage.insuredProperty('Car')
        claimsPolicyDetailsPage.addRemarks('Test')
        // claimsPolicyDetailsPage.expandIcon()
        // claimsPolicyDetailsPage.sumAssured2('6000')
        // claimsPolicyDetailsPage.insuredProperty2('Bike')
        // claimsPolicyDetailsPage.addRemarks2('Test123')
        // claimsPolicyDetailsPage.deleteIcon()
        claimsPolicyDetailsPage.deleteIcon()
        claimsPolicyDetailsPage.updateDetails()
    })
})