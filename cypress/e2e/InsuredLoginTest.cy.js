import {LoginClass} from "./pages/loginPage"
import { InsuredClass } from "./pages/insuredPage"
import { InsuredLoginClass } from "./pages/insuredLoginPage"
const loginPage=new LoginClass()
const insuredPage=new InsuredClass()
const insuredLoginPage=new InsuredLoginClass()
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
      insuredPage.enterPolicyHolder('Prakruthi Rao')
      insuredPage.enterContactPerson('Abhishek Kumar')
      insuredPage.enterEmail('keerthinayakk2@gmail.com')
      insuredPage.enterContact('7600008879')
      insuredPage.enterAdditionalEmail('keerthinayakk2@gmail.com')
      insuredPage.enterAdditionalContact('8976567898')
      insuredPage.addNewInsured()

// Search For Insured

insuredPage.searchForInsured('Prakruthi Rao')


//Creating Insured User
insuredLoginPage.createUser()
insuredLoginPage.enterFirstName('Bindu')
insuredLoginPage.enterLastName('Gowda')
insuredLoginPage.enterPrimaryEmail('keerthinayakk2@gmail.com')
insuredLoginPage.enterUserName('bindu.gowda')
insuredLoginPage.enterPassword('test123')
insuredLoginPage.enterNewUser()


//Verify if User is created
insuredLoginPage.verifyUser()
insuredLoginPage.searchForUser('bindu.gowda')
insuredLoginPage.logoutFromProfile()


//Login as Insured User
loginPage.enterUserName('bindu.gowda')
loginPage.enterPassword('test123')
loginPage.clickOnLogin()

insuredLoginPage.enterOldPassword('test123')
insuredLoginPage.enterNewPassword('test1234')
insuredLoginPage.confirmPassword('test1234')
insuredLoginPage.submitPassword()

loginPage.enterUserName('bindu.gowda')
loginPage.enterPassword('test1234')
loginPage.clickOnLogin()

// creating Intimation
insuredLoginPage.createIntimation()
insuredLoginPage.clickOnIntimation()
insuredLoginPage.enterDetails('Car')
insuredLoginPage.enterPolicyNumber('6711')
insuredLoginPage.selectDate('12:00')
insuredLoginPage.selectCause()
insuredLoginPage.enterLossAmount('50000')
insuredLoginPage.enterDescription('Test')
insuredLoginPage.enterContactDetails()
insuredLoginPage.enterContactLocation('Hubli')
insuredLoginPage.enterContactPersonNumber('8789890077')
insuredLoginPage.enterLocation('Hubli')
// insuredPage.goToAttachments()
insuredLoginPage.submitProposal()
insuredLoginPage.clickOnClaim()
insuredLoginPage.createIntimation()
insuredLoginPage.editIntimation()
// insuredPage.clickOnIntimation()
insuredLoginPage.goToAttachments()

insuredLoginPage.logoutFromProfile()

// Login as admin
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

    //   Check Intimation
    insuredLoginPage.createIntimation()
    insuredLoginPage.intimationEdit()
    insuredLoginPage.policyDetails('6711')
    insuredLoginPage.enterPolicyNum('6711')
    insuredLoginPage.enterPolicyType('ALL RISK POLICY')
    insuredLoginPage.selectInsurer('HDFC')
    // insuredLoginPage.selectPolicyHolder('Prakruthi Rao')
    insuredLoginPage.selectInsuredAmount('50000')
    insuredLoginPage.selectLineOfBusiness('MOTOR')
    insuredLoginPage.selectStartDate('1-feb-2024')
    insuredLoginPage.selectEndtDate('29-feb-2024')
    insuredLoginPage.selectDuration('28')
    insuredLoginPage.createPolicy()
    // insuredLoginPage.enterPolicyDetails('6711')
    // insuredLoginPage.insurerSelect('HDFC')
    insuredLoginPage.selectOccupancy('Construction')
    insuredLoginPage.converToClaim()
    insuredLoginPage.clickOnClaim()
    cy.log('Successfully converted to Claim')
    insuredLoginPage.logoutFromProfile()

    // Login as Insured User
loginPage.enterUserName('bindu.gowda')
loginPage.enterPassword('test1234')
loginPage.clickOnLogin()
insuredLoginPage.clickOnClaim()
cy.log('Intimation has been successfully converted to Claim')
insuredLoginPage.logoutFromProfile()



     
    })
  })