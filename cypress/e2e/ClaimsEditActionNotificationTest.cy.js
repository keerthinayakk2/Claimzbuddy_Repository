import { LoginClass } from './pages/loginPage'
import { ClaimsEditActionNotificationClass } from './pages/ClaimsEditActionNotificationPage'
const loginPage=new LoginClass()
const claimsEditActionNotificationPage=new ClaimsEditActionNotificationClass()


beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('ClaimEditActionNotification Test', () => {
    it('ClaimEditActionNotification', () => {


        loginPage.enterUserName('keerthi.nayak')
        loginPage.enterPassword('Keerthi@02')
        loginPage.clickOnLogin()
      
        //Edit
        claimsEditActionNotificationPage.selectClaims()
        claimsEditActionNotificationPage.clickOnEditButton()
        claimsEditActionNotificationPage.updateAssign('keerthi nayak')
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