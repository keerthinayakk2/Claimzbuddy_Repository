import {LoginClass} from "./pages/loginPage"
import { NotificationClass } from "./pages/notificationPage"
const loginPage=new LoginClass()
const notificationPage=new NotificationClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('Notification test', () => {
    it('Notification', () => {
  
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

      notificationPage.clickOnNotification()
      notificationPage.searchForId('10000279')
      notificationPage.mark()
      notificationPage.close()
      notificationPage.funOpen()
     
    })
  })