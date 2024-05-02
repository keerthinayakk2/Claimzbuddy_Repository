import{LoginClass} from "./pages/loginPage"
import { SpectrumMainClass } from "./pages/spectrumMainPage"
import{ClaimsCreationClass} from "./pages/claimsCreationPage"

const loginPage=new LoginClass()
const spectrumMainPage=new SpectrumMainClass()
const claimsCreationPage=new ClaimsCreationClass()
beforeEach(function(){
  cy.visit('https://spectrum-adv.dev.claimzbuddy.com')
})

describe('Login Test', () => {
  it('Login with valid credentials', () => {

    loginPage.enterUserName('a.verma')
    loginPage.enterPassword('test1234')
    loginPage.clickOnLogin()

    spectrumMainPage.clickOnAbcCorp()
    spectrumMainPage.switchTo()
    spectrumMainPage.clickOnSpectrum()

        claimsCreationPage.clickOnClaims()
        claimsCreationPage.createClaim()
        claimsCreationPage.selectInsured('KOCHHAR GLASS')
        claimsCreationPage.selectInsurer('BAJAJ ALLIANZ GENERAL INSURANCE COMPANY LIMITED (BAGIC)')
        claimsCreationPage.selectPolicy()
        claimsCreationPage.selectSurveyor('Astute ISLA  ( New Delhi)')
        claimsCreationPage.selectOccupancy('Construction')
        claimsCreationPage.claimDetails('test')
        claimsCreationPage.lossLocation('Mumbai')
        claimsCreationPage.incidentDate('15-Mar-2024')
        claimsCreationPage.estimatedLoss('100000')
        claimsCreationPage.showDetails()
        claimsCreationPage.saveAsDraft()
        claimsCreationPage.submit_Claim()
        claimsCreationPage.addRelationshipManager('Anurag vats')
        claimsCreationPage.addSubIntermediary()
        claimsCreationPage.saveDetails()

  })
})