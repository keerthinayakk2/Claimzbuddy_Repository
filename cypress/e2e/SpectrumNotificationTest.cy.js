import {LoginClass} from "./pages/loginPage"
import { NotificationClass } from "./pages/notificationPage"
import { SpectrumMainClass } from "./pages/spectrumMainPage"
const loginPage=new LoginClass()
const notificationPage=new NotificationClass()
const spectrumMainPage=new SpectrumMainClass()
beforeEach(function(){
    cy.visit('https://spectrum-adv.dev.claimzbuddy.com')
  })
  
  describe('Notification test', () => {
    it('Notification', () => {
  
        loginPage.enterUserName('a.verma')
        loginPage.enterPassword('test1234')
        loginPage.clickOnLogin()

        spectrumMainPage.clickOnAbcCorp()
        spectrumMainPage.switchTo()
        spectrumMainPage.clickOnSpectrum()

      notificationPage.clickOnNotification()
      notificationPage.searchForId('10000323')
      notificationPage.mark()
      notificationPage.close()
      notificationPage.funOpen()
     
    })
  })