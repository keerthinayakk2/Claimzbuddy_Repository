import{LoginClass} from "./pages/loginPage"
import { SpectrumMainClass } from "./pages/spectrumMainPage"


const loginPage=new LoginClass()
const spectrumMainPage=new SpectrumMainClass()
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

    
  })
})