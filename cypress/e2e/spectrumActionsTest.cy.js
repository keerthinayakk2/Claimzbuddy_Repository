import{LoginClass} from "./pages/loginPage"
import { SpectrumMainClass } from "./pages/spectrumMainPage"
import{ActionClass} from "./pages/actionPage"

const loginPage=new LoginClass()
const spectrumMainPage=new SpectrumMainClass()
const actionPage=new ActionClass()

beforeEach(function(){
  cy.visit('https://spectrum-adv.dev.claimzbuddy.com')
})

describe('Login Test', () => {
  it('Login with valid credentials', () => {

    loginPage.enterUserName('a.verma')
    loginPage.enterPassword('test1234')
    loginPage.clickOnLogin()

    spectrumMainPage.clickOnAbcCorp()
    spectrumMainPage.switchTo()
    spectrumMainPage.clickOnSpectrum()

    actionPage.clickOnActions()
    actionPage.searchForId('10000160')
    actionPage.assignTo('buddhabhushan s')
    actionPage.allAction()
    // actionPage.dueAction()
    

    actionPage.funOpen()
    actionPage.editAction()
    actionPage.enterMessage(' close')
    actionPage.save()

    actionPage.ClickOnX()
    actionPage.closureMessage('close action')
    actionPage.closeAction()
    actionPage.selectDate1()
    actionPage.assignTo3('buddhabhushan s')
    actionPage.typeMessage1('Test1')
    actionPage.save2()

    actionPage.close()

    actionPage.followUp()
    actionPage.selectDate()
    actionPage.assignTo2('buddhabhushan s')
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