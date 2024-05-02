import{LoginClass} from "./pages/loginPage"
import { SpectrumMainClass } from "./pages/spectrumMainPage"
import{InsuredClass} from "./pages/insuredPage"

const loginPage=new LoginClass()
const spectrumMainPage=new SpectrumMainClass()
const insurerPage=new InsurerClass()
const insuredPage=new InsuredClass()
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

    insuredPage.clickOnInsured()
      insuredPage.clickOnAddInsured()
      insuredPage.enterGroupName('uMota')
      insuredPage.enterPolicyHolder('Suresh Kumar')
      insuredPage.enterContactPerson('Abhishek Kumar')
      insuredPage.enterEmail('keerthinayakk2@gmail.com')
      insuredPage.enterContact('7600008879')
      insuredPage.enterAdditionalEmail('keerthinayakk2@gmail.com')
      insuredPage.enterAdditionalContact('8976567898')
      insuredPage.addNewInsured()

// Search For Insured

insuredPage.searchForInsured('Suresh Kumar')

// Update Insured

insuredPage.clickOnEdit()
insuredPage.clickOnEditPerson(' R')
insuredPage.updateInsured()

// Search For Insured

insuredPage.searchForInsured('Suresh Kumar')
// Delete Surveyor

insuredPage.deleteInsured()



    

   
    // loginPage.enterUserName('krupa.nayak')
    // loginPage.enterPassword('test1234')
    // loginPage.clickOnLogin()
    // cy.contains('Intimation',{timeout:5000}).click()
    // cy.xpath('/html/body/div[1]/div/div/main/div/div/div[2]/div/div[1]/div[1]/div/table/tbody/tr/td[14]/div/a/button',{timeout:5000}).click()
    // cy.contains('Attachments',{timeout:5000}).click()
    // cy.xpath('//input[@type="file"][1]').attachFile('screenshot.png')
    // cy.wait(700)
    // cy.xpath('/html/body/div[1]/div/div/form/div[1]/div/input').click()
  })
})