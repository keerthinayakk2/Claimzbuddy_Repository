// import "./LoginTest.cy"
import {LoginClass} from "./pages/loginPage"
import { UserClass } from "./pages/userPage"
const loginPage=new LoginClass()
const userPage=new UserClass()
beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('User Test', () => {
    it('Create New user', () => {
  
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

      userPage.clickOnUsers()
      userPage.clickOnAddUser()
      userPage.enterFirstName('Amitha')
      userPage.enterLastName('Nayak')
      userPage.enterPrimaryEmail('keerthinayakk2@gmail.com')
      userPage.enterUserName('amitha.nayak')
      userPage.enterPassword('test@123')
      userPage.selectUserRole()
      userPage.enterAdditionalEmail('keerthinayakk2@gmail.com')
      userPage.enterAdditionalContact('8976567898')
      userPage.addNewUser()

// Search For User
userPage.searchByInsured('Pankaj Tiwari')
userPage.searchByUserType('Insured')
userPage.searchForUser('amitha.nayak')


// Update User

userPage.clickOnUser()
userPage.ClickOnEditEmail('keerthinayakk2@gmail.com')
userPage.selectTypeOfUser()
userPage.updateUser()

// Search For User

userPage.searchForUser('amitha.nayak')


// Delete User

userPage.deleteUser()


     
      // cy.wait(700)
      // cy.xpath('/html/body/div[1]/div/div/form/div[1]/div/input').click()
    })
  })