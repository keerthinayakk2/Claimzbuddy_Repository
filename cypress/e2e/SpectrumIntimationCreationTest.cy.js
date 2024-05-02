import {LoginClass} from "./pages/loginPage"
import { InsuredLoginClass } from "./pages/insuredLoginPage"
import { IntimationCreationClass } from "./pages/intimationCreationPage"
import { SpectrumMainClass } from "./pages/spectrumMainPage"
const loginPage=new LoginClass()
const intimationCreationPage=new IntimationCreationClass()
const insuredLoginPage=new InsuredLoginClass()
const spectrumMainPage=new SpectrumMainClass()
beforeEach(function(){
    cy.visit('https://spectrum-adv.dev.claimzbuddy.com')
  })
  
  describe('IntimationCreation Test', () => {
    it('IntimationCreation', () => {
  
        loginPage.enterUserName('a.verma')
        loginPage.enterPassword('test1234')
        loginPage.clickOnLogin()

        spectrumMainPage.clickOnAbcCorp()
        spectrumMainPage.switchTo()
        spectrumMainPage.clickOnSpectrum()

      intimationCreationPage.clickOnIntimation()
      intimationCreationPage.createIntimation()
      intimationCreationPage.selectInsured('KOCHHAR GLASS')
      intimationCreationPage.policyDetails('1200')
    
      insuredLoginPage.enterPolicyNum('35600087')
      insuredLoginPage.enterPolicyType('ALL RISK POLICY')
      insuredLoginPage.selectInsurer('BAGIC')
      // insuredLoginPage.selectPolicyHolder('Karunya Rao')
      insuredLoginPage.selectInsuredAmount('50000')
      insuredLoginPage.selectLineOfBusiness('MOTOR')
      insuredLoginPage.selectStartDate('1-feb-2024')
      insuredLoginPage.selectEndtDate('29-feb-2024')
      insuredLoginPage.selectDuration('28')
      insuredLoginPage.createPolicy()
      intimationCreationPage.policyDetails('35600087')
      // insuredLoginPage.enterPolicyDetails('8899')
      // insuredLoginPage.insurerSelect('HDFC')
      insuredLoginPage.selectOccupancy('Construction')


      intimationCreationPage.fillDetails('test intimation')
      intimationCreationPage.selectDate('12:00')
      intimationCreationPage.selectCause('Fire')
      intimationCreationPage.enterDescription('test')
      intimationCreationPage.selectContactPerson('Mithun')
      intimationCreationPage.selectContactNumber('9878909088')
      intimationCreationPage.selectIncidentAddress('Bengaluru')
      intimationCreationPage.submit()

      // intimationCreationPage.statusAll()
      // intimationCreationPage.statusConverted()
      // intimationCreationPage.statusClosed()
      // intimationCreationPage.statusCreated()

// Search For Inusrer



// Update Inusrer



// Search For Inusrer


// Delete Inusrer


    })
  })