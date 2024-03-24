export class ClaimsAttachmentsClass{

    select_Claim='(//a[@class="mantine-Text-root mantine-Anchor-root mantine-qdotc7"])[1]'
    select_Attachments='(//button[@class="mantine-UnstyledButton-root mantine-Tabs-tab mantine-1cwk9zn"])[5]'
    preview='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-xqxxuo"])[1]'
    close_preview='//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-CloseButton-root mantine-Drawer-close mantine-1fholi4"]'
    download='(//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-uin1f8"])[1]'
    selectClaims(){
        cy.xpath(this.select_Claim).click()
    }
    selectAttachment(){
        cy.xpath(this.select_Attachments).click()
    }
    previewAttachment(){
        cy.xpath(this.preview).click()
        cy.wait(7000)
        cy.xpath(this.close_preview).click()
    }
    downloadFile(){
        cy.xpath(this.download).click()
        cy.wait(3000)
    }


}