import {LoginClass} from "./pages/loginPage"
import { ActionClass } from "./pages/actionPage"
const loginPage=new LoginClass()
const actionPage=new ActionClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('Actions Test', () => {
    it('Actions', () => {
  
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

      actionPage.clickOnActions()
      actionPage.searchForId('1000024')
      actionPage.assignTo('keerthi nayak')
      actionPage.allAction()
      // actionPage.dueAction()
      actionPage.funOpen()
      actionPage.editAction()
      actionPage.enterMessage(' close')
      actionPage.save()

      actionPage.ClickOnX()
      actionPage.closureMessage('close action')
      actionPage.closeAction()
      actionPage.close()

      actionPage.followUp()
      actionPage.selectDate(27)
      actionPage.assignTo2('keerthi nayak')
      actionPage.typeMessage('Follow up')
      actionPage.save()
      actionPage.funOpen()


     
    })
  })