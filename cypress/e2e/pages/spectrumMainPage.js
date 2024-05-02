export class SpectrumMainClass{

abc_Corp='(//div[@class="mantine-Group-root mantine-k3ov3c"])[1]'
spectrum='(//div[@class="mantine-Text-root mantine-1d564l0"])[22]'
switch='(//div[@class="mantine-Text-root mantine-1ycwzif"])[1]'

clickOnAbcCorp(){
    cy.xpath(this.abc_Corp).click()
}
switchTo(){
    cy.wait(14000)
    cy.xpath(this.switch).click()
}
clickOnSpectrum(){
    cy.xpath(this.spectrum).click()
    cy.wait(15000)
}
}
