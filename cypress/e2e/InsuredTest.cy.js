import {LoginClass} from "./pages/loginPage"
import { SurveyorClass, UserClass } from "./pages/insuredPage"
import { InsuredClass } from "./pages/insuredPage"
const loginPage=new LoginClass()
const insuredPage=new InsuredClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('Insured Test', () => {
    it('Insured', () => {
  
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

      insuredPage.clickOnInsured()
      insuredPage.clickOnAddInsured()
      insuredPage.enterGroupName('Group')
      insuredPage.enterPolicyHolder('Aradhana Suresh')
      insuredPage.enterContactPerson('Abhishek Kumar')
      insuredPage.enterEmail('keerthinayakk2@gmail.com')
      insuredPage.enterContact('7600008879')
      insuredPage.enterAdditionalEmail('keerthinayakk2@gmail.com')
      insuredPage.enterAdditionalContact('8976567898')
      insuredPage.addNewInsured()

// Search For Insured

insuredPage.searchForInsured('Aradhana Suresh')

// Update Insured

insuredPage.clickOnEdit()
insuredPage.clickOnEditPerson(' R')
insuredPage.updateInsured()

// Search For Insured

insuredPage.searchForInsured('Aradhana Suresh')

//Creating Insured User
insuredPage.createUser()
insuredPage.enterFirstName('Bindu')
insuredPage.enterLastName('Gowda')
insuredPage.enterPrimaryEmail('keerthinayakk2@gmail.com')
insuredPage.enterUserName('bindu.gowda')
insuredPage.enterPassword('test123')
insuredPage.enterNewUser()


//Verify if User is created
insuredPage.verifyUser()
insuredPage.searchForUser('bindu.gowda')
insuredPage.logoutFromProfile()


//Login as Insured User
loginPage.enterUserName('bindu.gowda')
loginPage.enterPassword('test123')
loginPage.clickOnLogin()

insuredPage.enterOldPassword('test123')
insuredPage.enterNewPassword('test1234')
insuredPage.confirmPassword('test1234')
insuredPage.submitPassword()

loginPage.enterUserName('bindu.gowda')
loginPage.enterPassword('test1234')
loginPage.clickOnLogin()

// creating Intimation
insuredPage.createIntimation()
insuredPage.clickOnIntimation()
insuredPage.enterDetails('Car')
insuredPage.enterPolicyNumber('5644')
insuredPage.selectDate('12:00')
insuredPage.selectCause()
insuredPage.enterLossAmount('50000')
insuredPage.enterDescription('Test')
insuredPage.enterContactDetails()
insuredPage.enterContactLocation('Hubli')
insuredPage.enterContactPersonNumber('8789890077')
insuredPage.enterLocation('Hubli')
// insuredPage.goToAttachments()
insuredPage.submitProposal()
insuredPage.clickOnClaim()
insuredPage.createIntimation()
insuredPage.editIntimation()
// insuredPage.clickOnIntimation()
insuredPage.goToAttachments()

insuredPage.logoutFromProfile()

// Login as admin
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

    //   Check Intimation
    insuredPage.createIntimation()
    insuredPage.intimationEdit()
    insuredPage.policyDetails('221133')
    insuredPage.enterPolicyNum('221133')
    insuredPage.enterPolicyType('ALL RISK POLICY')
    insuredPage.selectInsurer('HDFC')
    insuredPage.selectPolicyHolder('Aradhana Suresh')
    insuredPage.selectInsuredAmount('50000')
    insuredPage.selectLineOfBusiness('MOTOR')
    insuredPage.selectStartDate('1-feb-2024')
    insuredPage.selectEndtDate('29-feb-2024')
    insuredPage.selectDuration('28')
    insuredPage.createPolicy()
    insuredPage.enterPolicyDetails('221133')
    insuredPage.insurerSelect('HDFC')
    insuredPage.selectOccupancy('Construction')
    insuredPage.converToClaim()
    insuredPage.clickOnClaim()
    insuredPage.logoutFromProfile()

    // Login as Insured User
loginPage.enterUserName('bindu.gowda')
loginPage.enterPassword('test1234')
loginPage.clickOnLogin()
insuredPage.clickOnClaim()
insuredPage.logoutFromProfile()
// Login as Admin User
    loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()
      insuredPage.clickOnInsured()
      insuredPage.searchForInsured('Aradhana Suresh')
// Delete Surveyor

insuredPage.deleteInsured()


     
    })
  })