import {LoginClass} from "./pages/loginPage"
import { IntimationAttachmentClass } from "./pages/intimationAttachmentPage"
import { IntimationCreationClass } from "./pages/intimationCreationPage"
const loginPage=new LoginClass()
const intimationAttachmentPage=new IntimationAttachmentClass()

beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('IntimationAttachment Test', () => {
    it('IntimationAttachment', () => {
  
      loginPage.enterUserName('keerthi.nayak')
      loginPage.enterPassword('Keerthi@02')
      loginPage.clickOnLogin()

      //click on Intimation to attach file
     intimationAttachmentPage.clickOnIntimation()
     intimationAttachmentPage.editIntimation()
    //Attaching
     intimationAttachmentPage.goToAttachments()
    //  const image='Screenshot.png'
     intimationAttachmentPage.attachFile()
      intimationAttachmentPage.fileSelection()
     //sending file
     intimationAttachmentPage.clickOnSend()
    
     intimationAttachmentPage.typeToAddress('keerthinayakk2@gmail.com')
     intimationAttachmentPage.sendAttachment()
      intimationAttachmentPage.send_assertion()

     //Rejectinfg File
     intimationAttachmentPage.fileSelection()
      intimationAttachmentPage.clickOnReject()
      intimationAttachmentPage.typeToAddress('keerthinayakk2@gmail.com')
      intimationAttachmentPage.sendAttachment()
      intimationAttachmentPage.reject_assertion()

// Requesting File
      intimationAttachmentPage.requestFile()
      intimationAttachmentPage.typeToAddress('keerthinayakk2@gmail.com')
      intimationAttachmentPage.sendAttachment()
      intimationAttachmentPage.request_assertion()

  //deleting attachment
  intimationAttachmentPage.attachFile()
  intimationAttachmentPage.downloadFile()
  intimationAttachmentPage.deleteFile()

  //Adding New attachment type
  intimationAttachmentPage.addNewAttachment('New type')
  intimationAttachmentPage.deleteNewAttachmentType()

  //Sorting Type
  // intimationAttachmentPage.clickOnSearch('FIR')
  // intimationAttachmentPage.clickOnSearch('Photographs')
  intimationAttachmentPage.clickOnSearch('Policy')
  intimationAttachmentPage.unselect()
  // intimationAttachmentPage.unselect()
  // intimationAttachmentPage.unselect()
    })
  })