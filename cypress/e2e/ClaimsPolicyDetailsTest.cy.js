import { LoginClass } from './pages/loginPage'
import { ClaimsPolicyDetailsClass } from './pages/claimsPolicyDetailsPage'
const loginPage=new LoginClass()
const claimsPolicyDetailsPage=new ClaimsPolicyDetailsClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('ClaimPolicyDetails Test', () => {
    it('PolicyDetails', () => {


        loginPage.enterUserName('keerthi.nayak')
        loginPage.enterPassword('Keerthi@02')
        loginPage.clickOnLogin()

        claimsPolicyDetailsPage.selectClaim()
        claimsPolicyDetailsPage.selectPolicyDetails()
        claimsPolicyDetailsPage.showDetails()
        claimsPolicyDetailsPage.lineOfBusiness('FIRE')
        claimsPolicyDetailsPage.updateDetails()
        claimsPolicyDetailsPage.addReferenceEmail('abc@gmail.com')
        claimsPolicyDetailsPage.addReferenceEmail('abc123@gmail.com')
        claimsPolicyDetailsPage.removeEmail()
        claimsPolicyDetailsPage.expandIcon()
        claimsPolicyDetailsPage.sumAssured('50000')
        claimsPolicyDetailsPage.insuredProperty('Car')
        claimsPolicyDetailsPage.addRemarks('Test')
        claimsPolicyDetailsPage.expandIcon()
        claimsPolicyDetailsPage.sumAssured2('6000')
        claimsPolicyDetailsPage.insuredProperty2('Bike')
        claimsPolicyDetailsPage.addRemarks2('Test123')
        claimsPolicyDetailsPage.deleteIcon()
        claimsPolicyDetailsPage.updateDetails()
    })
})