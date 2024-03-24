import { LoginClass } from './pages/loginPage'
import { ClaimsCreationClass } from './pages/claimsCreationPage'
const loginPage=new LoginClass()
const claimsCreationPage=new ClaimsCreationClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('ClaimsCreation Test', () => {
    it('Insured', () => {


        loginPage.enterUserName('keerthi.nayak')
        loginPage.enterPassword('Keerthi@02')
        loginPage.clickOnLogin()

        claimsCreationPage.clickOnClaims()
        claimsCreationPage.createClaim()
        claimsCreationPage.selectInsured('Apoorva Vasishta')
        claimsCreationPage.selectInsurer('HDFC Insurer')
        claimsCreationPage.selectPolicy()
        claimsCreationPage.selectSurveyor('Max LLP')
        claimsCreationPage.selectOccupancy('Construction')
        claimsCreationPage.claimDetails('test')
        claimsCreationPage.lossLocation('Mumbai')
        claimsCreationPage.incidentDate('15-Mar-2024')
        claimsCreationPage.estimatedLoss('100000')
        claimsCreationPage.showDetails()
        claimsCreationPage.saveAsDraft()
        claimsCreationPage.submit_Claim()
        
        claimsCreationPage.addRelationshipManager('Harshal Shah')
        claimsCreationPage.addSubIntermediary()
        claimsCreationPage.saveDetails()
    })
})