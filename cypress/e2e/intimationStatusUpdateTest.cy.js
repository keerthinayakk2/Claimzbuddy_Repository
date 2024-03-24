import {LoginClass} from "./pages/loginPage"
import { IntimationStatusUpdateClass } from "./pages/intimationStatusUpdatePage"

const loginPage=new LoginClass()
const intimationStatusUpdatePage=new IntimationStatusUpdateClass()

beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('Intimation Test', () => {
    it('Intimation', () => {
  
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

      intimationStatusUpdatePage.clickOnIntimation()
      intimationStatusUpdatePage.statusAll()
      intimationStatusUpdatePage.statusConverted()
      intimationStatusUpdatePage.statusClosed()
      intimationStatusUpdatePage.statusCreated()
      //Updating Intimation
      intimationStatusUpdatePage.clickOnEdit()
      intimationStatusUpdatePage.editInsurer('GO DIGIT')
      intimationStatusUpdatePage.editOccupancy('Cold Storage')
      intimationStatusUpdatePage.editDetails(' 123')
      intimationStatusUpdatePage.estimatedLoss('50000')
      intimationStatusUpdatePage.updateProposal()
      intimationStatusUpdatePage.convertToClaim()
      
      
      
      

      
    })
  })