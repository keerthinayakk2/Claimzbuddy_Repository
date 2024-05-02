import { LoginClass } from './pages/loginPage'
import { ClaimsEditActionNotificationClass } from './pages/ClaimsEditActionNotificationPage'
import { SpectrumMainClass } from "./pages/spectrumMainPage"
const loginPage=new LoginClass()
const claimsEditActionNotificationPage=new ClaimsEditActionNotificationClass()
const spectrumMainPage=new SpectrumMainClass()

beforeEach(function(){
    cy.visit('https://spectrum-adv.dev.claimzbuddy.com')
  })
  
  describe('ClaimEditActionNotification Test', () => {
    it('ClaimEditActionNotification', () => {


        loginPage.enterUserName('a.verma')
        loginPage.enterPassword('test1234')
        loginPage.clickOnLogin()

        spectrumMainPage.clickOnAbcCorp()
        spectrumMainPage.switchTo()
        spectrumMainPage.clickOnSpectrum()
        //Edit
        claimsEditActionNotificationPage.selectClaims()
        claimsEditActionNotificationPage.clickOnEditButton()
        claimsEditActionNotificationPage.updateAssign('Mayuresh')
        claimsEditActionNotificationPage.updateStatus('ASSESSMENT_AWAITED')
        claimsEditActionNotificationPage.updateChanges()

        //Notifications
        claimsEditActionNotificationPage.buttonClick()
        claimsEditActionNotificationPage.notification('New notifictaion')
        claimsEditActionNotificationPage.notificationStatus()

        //Actions
        claimsEditActionNotificationPage.action('keerthi nayak','New action','close')

        claimsEditActionNotificationPage.actionStatus()
        claimsEditActionNotificationPage.buttonClick()

        //Delete
        claimsEditActionNotificationPage.deleteClaim()
        
    })
})