import{LoginClass} from "./pages/loginPage"
import { SpectrumMainClass } from "./pages/spectrumMainPage"
import{ClaimsAttachmentsTest} from "./pages/claimsAttachmentsPage"
import { ClaimsAttachmentsClass } from './pages/claimsAttachmentsPage'
import { IntimationAttachmentClass } from './pages/intimationAttachmentPage'
const loginPage=new LoginClass()
const spectrumMainPage=new SpectrumMainClass()
const claimsAttachmentsPage=new ClaimsAttachmentsClass()
const intimationAttachmentPage=new IntimationAttachmentClass()

beforeEach(function(){
  cy.visit('https://spectrum-adv.dev.claimzbuddy.com')
})

describe('Login Test', () => {
  it('Login with valid credentials', () => {

    loginPage.enterUserName('a.verma')
    loginPage.enterPassword('test1234')
    loginPage.clickOnLogin()

    spectrumMainPage.clickOnAbcCorp()
    spectrumMainPage.switchTo()
    spectrumMainPage.clickOnSpectrum()

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
// intimationAttachmentPage.deleteNewAttachmentType()

//Sorting Type

intimationAttachmentPage.clickOnSearch('Bill Of Entry')
intimationAttachmentPage.clickOnSearch('Commercial Invoice')
intimationAttachmentPage.clickOnSearch('FIR')
intimationAttachmentPage.unselect()
intimationAttachmentPage.unselect()
intimationAttachmentPage.unselect()

  })
})