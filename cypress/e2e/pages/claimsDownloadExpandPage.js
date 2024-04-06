export class ClaimsDownloadExpandClass{

    download='//button[@class="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-19d3672"]'
    expand='(//td[@class="mantine-1e4gja3"])[2]'
    assert1='Successfully downloaded the file'

    downloadExcelFile(){
        cy.xpath(this.download).click({force:true})
        cy.contains(this.assert1).should('have.text','Successfully downloaded the file')
        cy.log('Successfully downloaded the file')
    }
    expandClaim(){
        cy.xpath(this.expand).click()
    }
    
}