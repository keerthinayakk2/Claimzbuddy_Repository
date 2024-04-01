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
      actionPage.searchForId('10000240')
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
      // actionPage.selectDate1()
      actionPage.assignTo3('keerthi nayak')
      actionPage.typeMessage1('Test1')
      actionPage.save2()

      actionPage.close()

      actionPage.followUp()
      // actionPage.selectDate()
      actionPage.assignTo2('keerthi nayak')
      actionPage.typeMessage('Test2')
      actionPage.save2()
     
      

      actionPage.funOpen()
      // actionPage.searchForId('10000240')
      // actionPage.assignTo('keerthi nayak')
      // actionPage.allAction()
      actionPage.close()
      actionPage.closure_msg()
      // actionPage.assertion_msg('Follow up msg1')


     
    })
  })