import{LoginClass} from "./pages/loginPage"


const loginPage=new LoginClass()

beforeEach(function(){
  cy.visit('https://abccorp.dev.claimzbuddy.com/login')
})

describe('Login Test', () => {
  it('Login with valid credentials', () => {

    loginPage.enterUserName('keerthi.nayak')
    loginPage.enterPassword('Keerthi@02')
    loginPage.clickOnLogin()
   
  })
})