export class AllFunctionalitiesClass{

    users='(//div[@class="mantine-12wya08"])[9]'
    surveyor='(//div[@class="mantine-12wya08"])[8]'
    insurer='(//div[@class="mantine-12wya08"])[7]'
    insured='(//div[@class="mantine-12wya08"])[6]'
    review='(//div[@class="mantine-12wya08"])[5]'
    notifications='(//div[@class="mantine-12wya08"])[4]'
    actions='(//div[@class="mantine-12wya08"])[3]'
    intimation='(//div[@class="mantine-12wya08"])[2]'
    claims='(//div[@class="mantine-12wya08"])[1]'

    clickOnUsers(){
        cy.xpath(this.users).click()
        cy.wait(3000)
        cy.log('Checking whether Users functinality working fine')
    }
    clickOnSurveyor(){
        cy.xpath(this.surveyor).click()
        cy.wait(3000)
        cy.log('Checking whether Surveyor functinality working fine')
    }
    clickOnInsured(){
        cy.xpath(this.insured).click()
        cy.wait(3000)
        cy.log('Checking whether Insured functinality working fine')
    }
    clickOnInsurer(){
        cy.xpath(this.insurer).click()
        cy.wait(3000)
        cy.log('Checking whether Insurer functinality working fine')
    }
    clickOnReview(){
        cy.xpath(this.review).click()
        cy.wait(3000)
        cy.log('Checking whether Review functinality working fine')
    }
    clickOnNotifications(){
        cy.xpath(this.notifications).click()
        cy.wait(3000)
        cy.log('Checking whether Notifications functinality working fine')
    }
    clickOnActions(){
        cy.xpath(this.actions).click()
        cy.wait(3000)
        cy.log('Checking whether Actions functinality working fine')
    }
    clickOnIntimation(){
        cy.xpath(this.intimation).click()
        cy.wait(3000)
        cy.log('Checking whether Intimation functinality working fine')
    }
    clickOnClaims(){
        cy.xpath(this.claims).click()
        cy.wait(3000)
        cy.log('Checking whether Claims functinality working fine')
    }
}