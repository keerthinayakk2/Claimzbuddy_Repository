import { LoginClass } from './pages/loginPage'
import { ClaimsDownloadExpandClass } from './pages/claimsDownloadExpandPage'
import { SpectrumMainClass } from "./pages/spectrumMainPage"
// import {} from './fixtures/images/screenshot.png'
const loginPage=new LoginClass()
const claimsDownloadExpandPage=new ClaimsDownloadExpandClass()
const spectrumMainPage=new SpectrumMainClass()
beforeEach(function(){
    cy.visit('https://spectrum-adv.dev.claimzbuddy.com')
  })
  
  describe('ClaimsCreation Test', () => {
    it('ClaimsCreation', () => {


        loginPage.enterUserName('a.verma')
        loginPage.enterPassword('test1234')
        loginPage.clickOnLogin()

        spectrumMainPage.clickOnAbcCorp()
        spectrumMainPage.switchTo()
        spectrumMainPage.clickOnSpectrum()
        
        claimsDownloadExpandPage.expandClaim()
        claimsDownloadExpandPage.downloadExcelFile()
    })
})