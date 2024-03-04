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