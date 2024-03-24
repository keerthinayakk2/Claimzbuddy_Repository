import { LoginClass } from './pages/loginPage'
import { ClaimsNotesClass } from './pages/claimsNotesPage'
const loginPage=new LoginClass()
const claimsNotesPage=new ClaimsNotesClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('ClaimsNotes Test', () => {
    it('Notes', () => {


        loginPage.enterUserName('keerthi.nayak')
        loginPage.enterPassword('Keerthi@02')
        loginPage.clickOnLogin()

        claimsNotesPage.searchByStatus('ASSESSMENT_AWAITED')
        claimsNotesPage.searchByClaimNumber('10000271')

        claimsNotesPage.selectFilter()
        claimsNotesPage.searchByInsured('Apoorva Vasishta')
        claimsNotesPage.searchByInsurer('HDFC')
        claimsNotesPage.searchByProcessor('keerthi nayak')
        claimsNotesPage.searchBySurveyor('Max')
        claimsNotesPage.searchByClaimAge('90 Days')
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