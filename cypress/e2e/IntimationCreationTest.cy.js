import {LoginClass} from "./pages/loginPage"
import { InsuredLoginClass } from "./pages/insuredLoginPage"
import { IntimationCreationClass } from "./pages/intimationCreationPage"
const loginPage=new LoginClass()
const intimationCreationPage=new IntimationCreationClass()
const insuredLoginPage=new InsuredLoginClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('IntimationCreation Test', () => {
    it('IntimationCreation', () => {
  
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

      intimationCreationPage.clickOnIntimation()
      intimationCreationPage.createIntimation()
      intimationCreationPage.selectInsured('Apoorva Vasishta')
      intimationCreationPage.policyDetails('70448')
    
      insuredLoginPage.enterPolicyNum('70448')
      insuredLoginPage.enterPolicyType('ALL RISK POLICY')
      insuredLoginPage.selectInsurer('HDFC')
      // insuredLoginPage.selectPolicyHolder('Karunya Rao')
      insuredLoginPage.selectInsuredAmount('50000')
      insuredLoginPage.selectLineOfBusiness('MOTOR')
      insuredLoginPage.selectStartDate('1-feb-2024')
      insuredLoginPage.selectEndtDate('29-feb-2024')
      insuredLoginPage.selectDuration('28')
      insuredLoginPage.createPolicy()
      intimationCreationPage.policyDetails('70448')
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