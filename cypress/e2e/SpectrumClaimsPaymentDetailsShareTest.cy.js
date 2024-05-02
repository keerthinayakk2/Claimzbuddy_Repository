import { LoginClass } from './pages/loginPage'
import { ClaimsPaymentDetailsShareClass } from './pages/claimsPaymentDetailsSharePage'
import { SpectrumMainClass } from "./pages/spectrumMainPage"
const loginPage=new LoginClass()
const claimsPaymentDetailsSharePage=new ClaimsPaymentDetailsShareClass()
const spectrumMainPage=new SpectrumMainClass()
// const intimationAttachmentPage=new IntimationAttachmentClass()

beforeEach(function(){
    cy.visit('https://spectrum-adv.dev.claimzbuddy.com')
  })
  
  describe('ClaimPaymentDetailsShare Test', () => {
    it('ClaimPaymentDetailsShare', () => {


        loginPage.enterUserName('a.verma')
        loginPage.enterPassword('test1234')
        loginPage.clickOnLogin()

        spectrumMainPage.clickOnAbcCorp()
        spectrumMainPage.switchTo()
        spectrumMainPage.clickOnSpectrum()
      // Adding Payment
      claimsPaymentDetailsSharePage.selectClaim()
      claimsPaymentDetailsSharePage.selectPaymentDetails()
      claimsPaymentDetailsSharePage.kycSubmitted()
      claimsPaymentDetailsSharePage.subrogationBond()
      
      claimsPaymentDetailsSharePage.addPayment()
      claimsPaymentDetailsSharePage.dateOfRemittance()
      claimsPaymentDetailsSharePage.typeOfSettlement('Interim')
      claimsPaymentDetailsSharePage.modeOfSettlement('Cheque')
      claimsPaymentDetailsSharePage.amountRemitted('40000')
      claimsPaymentDetailsSharePage.chequeNumber('88990')
      claimsPaymentDetailsSharePage.addNewPayment()
      claimsPaymentDetailsSharePage.addPaymentAssertion()
// Update Payment
      claimsPaymentDetailsSharePage.editPayment()
      claimsPaymentDetailsSharePage.amountRemitted('50000')
      claimsPaymentDetailsSharePage.updatePayment()
      claimsPaymentDetailsSharePage.updatePaymentAssertion()
    // Delete Payment
    claimsPaymentDetailsSharePage.deletePayment()
    claimsPaymentDetailsSharePage.confirmDelete()
    
    

//Share
    claimsPaymentDetailsSharePage.selectShare()
    claimsPaymentDetailsSharePage.addNewField()
    claimsPaymentDetailsSharePage.addNewType('New type')
    claimsPaymentDetailsSharePage.addValue('test')
    claimsPaymentDetailsSharePage.deleteType()

    claimsPaymentDetailsSharePage.chooseExistingField()
    claimsPaymentDetailsSharePage.deleteType()
    claimsPaymentDetailsSharePage.lossDescription('Due to uncertainity')
    claimsPaymentDetailsSharePage.shareWithInsurer('keerthinayakk2@gmail.com')
    claimsPaymentDetailsSharePage.emailAssertion()
        
    })
})