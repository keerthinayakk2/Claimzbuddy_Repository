import { LoginClass } from './pages/loginPage'
import { ClaimsAttachmentsClass } from './pages/claimsAttachmentsPage'
import { IntimationAttachmentClass } from './pages/intimationAttachmentPage'
const loginPage=new LoginClass()
const claimsAttachmentsPage=new ClaimsAttachmentsClass()
const intimationAttachmentPage=new IntimationAttachmentClass()

beforeEach(function(){
    cy.visit('https://abccorp.dev.claimzbuddy.com/login')
  })
  
  describe('ClaimAttachment Test', () => {
    it('ClaimAttachment', () => {


        loginPage.enterUserName('keerthi.nayak')
        loginPage.enterPassword('Keerthi@02')
        loginPage.clickOnLogin()
    
        claimsAttachmentsPage.selectClaims()
        claimsAttachmentsPage.selectAttachment()
        // /Attaching
     
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
  claimsAttachmentsPage.downloadFile()
  claimsAttachmentsPage.previewAttachment()
  intimationAttachmentPage.deleteFile()

  //Adding New attachment type
  intimationAttachmentPage.addNewAttachment('New type')
  intimationAttachmentPage.deleteNewAttachmentType()

  //Sorting Type
  
  intimationAttachmentPage.clickOnSearch('FIR')
  intimationAttachmentPage.clickOnSearch('Photographs')
  intimationAttachmentPage.clickOnSearch('Policy')
  intimationAttachmentPage.unselect()
  intimationAttachmentPage.unselect()
  intimationAttachmentPage.unselect()



            
        
    })
})