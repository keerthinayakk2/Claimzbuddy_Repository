import { LoginClass } from './pages/loginPage'
import { ClaimsDownloadExpandClass } from './pages/claimsDownloadExpandPage'
// import {} from './fixtures/images/screenshot.png'
const loginPage=new LoginClass()
const claimsDownloadExpandPage=new ClaimsDownloadExpandClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('ClaimsCreation Test', () => {
    it('ClaimsCreation', () => {


        loginPage.enterUserName('keerthi.nayak')
        loginPage.enterPassword('Keerthi@02')
        loginPage.clickOnLogin()

        claimsDownloadExpandPage.expandClaim()
        claimsDownloadExpandPage.downloadExcelFile()
    })
})