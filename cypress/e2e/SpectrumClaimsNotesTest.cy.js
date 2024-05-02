import { LoginClass } from './pages/loginPage'
import { ClaimsNotesClass } from './pages/claimsNotesPage'
import { SpectrumMainClass } from "./pages/spectrumMainPage"
const loginPage=new LoginClass()
const claimsNotesPage=new ClaimsNotesClass()
const spectrumMainPage=new SpectrumMainClass()
beforeEach(function(){
    cy.visit('https://spectrum-adv.dev.claimzbuddy.com')
  })
  
  describe('ClaimsNotes Test', () => {
    it('Notes', () => {


        loginPage.enterUserName('a.verma')
        loginPage.enterPassword('test1234')
        loginPage.clickOnLogin()

        spectrumMainPage.clickOnAbcCorp()
        spectrumMainPage.switchTo()
        spectrumMainPage.clickOnSpectrum()

        claimsNotesPage.searchByStatus('ASSESSMENT_AWAITED')
        claimsNotesPage.searchByClaimNumber('10000124')

        claimsNotesPage.selectFilter()
        claimsNotesPage.searchByInsured('CONTINUUM POWER TRADING (TN) PVT. LTD.')
        claimsNotesPage.searchByInsurer('ROYAL SUNDARAM')
        claimsNotesPage.searchByProcessor('MAYURESH K')
        claimsNotesPage.searchBySurveyor('T3')
        claimsNotesPage.searchByClaimAge('180 Days')
        claimsNotesPage.selectUnfilter()


        claimsNotesPage.selectClaim()
        claimsNotesPage.selectNotes()
        claimsNotesPage.radioAll()
        claimsNotesPage.radioNote()
        claimsNotesPage.radioLog()
        claimsNotesPage.addNote('New note')
        claimsNotesPage.radioNote()
        // claimsNotesPage
        // claimsNotesPage
        // claimsNotesPage
        // claimsNotesPage
    })
})