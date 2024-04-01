

export class ReviewClass{
    review_select='(//div[@class="mantine-12wya08"])[5]'
    claim_Status='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[1]'
    select_Insured='(//input[@class="mantine-Input-input mantine-Select-input mantine-kcpopt"])[2]'
    claim_Age='//input[@class="mantine-Input-input mantine-Select-input mantine-1cn2mlo"]'
    all='(//input[@class="mantine-1cu6yj8 mantine-Radio-radio"])[1]'
    reviewed='(//input[@class="mantine-1cu6yj8 mantine-Radio-radio"])[2]'
    review='(//span[@class="mantine-1ryt1ht mantine-Button-label"])[3]'
    review_Message='//textarea[@class="mantine-Input-input mantine-Textarea-input mantine-1ix1d88"]'
    assign_To='(//input[@class="mantine-Input-input mantine-Select-input mantine-1cn2mlo"])[2]'
    scroll='(//div[@class="mantine-1qj7q0z mantine-Input-rightSection mantine-Select-rightSection"])[2]'
    assignee_Name='(//input[@value="keerthi nayak"])'
    date='//button[@class="mantine-DatePickerInput-input mantine-Input-input mantine-DatePickerInput-input mantine-1e6hn20"]'
    select_Date='(//button[@class="mantine-UnstyledButton-root mantine-Day-day mantine-DatePickerInput-day mantine-7yisjr"])[15]'
    add_Review='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-g7194"]'
    review_Assertion='Successfully added a review'

//submitting review

    submit_Review='(//span[@class="mantine-1ryt1ht mantine-Button-label"])[1]'
    review_Duration='(//input[@class="mantine-Input-input mantine-Select-input mantine-1cn2mlo"])[2]'
    submit='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-1h3zql2"]'
    mail_Address='(//input[@class="mantine-MultiSelect-searchInput mantine-MultiSelect-searchInputEmpty mantine-1t7zc7a"])[1]'
    send_Email='//button[@class="mantine-UnstyledButton-root mantine-Button-root mantine-sa3oaj"]'
    send_Assertion='Successfully sent mail'


    reviewSelect(){
        cy.xpath(this.review_select).click()
    }
    claimStatus(status){
        cy.xpath(this.claim_Status).type(status).type('{downArrow}{enter}')
    }
    selectInsured(insured){
        cy.xpath(this.select_Insured).type(insured).type('{downArrow}{enter}')
    }
    claimAge(age){
        cy.xpath(this.claim_Age).click()
        cy.contains(age).click()
    }
    selectAll(){
        cy.xpath(this.all).click()
    }
    reviewAll(){
        cy.xpath(this.reviewed).click()
    }
    reviewClick(){
        cy.xpath(this.review).click()
    }
    reviewMessage(msg){
        cy.xpath(this.review_Message).type(msg)
    }
    assignTo(assignee){
    cy.xpath(this.assign_To).click().invoke('show').type('{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{enter}',{force:true})
        // .trigger('mouseout')
        // cy.scrollTo('bottom',{force:true}).contains(assignee).click()        // cy.xpath(this.assignee_Name).invoke('show').click({force:true})
    }
    actionableDate(date){
        cy.xpath(this.date).click()
        cy.xpath(this.select_Date).click()
    }
    addReview(){
        cy.xpath(this.add_Review).click()
    }
    reviewAssertion(){
        cy.contains(this.review_Assertion).should('have.text','Successfully added a review')
        cy.log('Successfully added a review')
    }

    //Submitting Review
    submitReview(){
        cy.xpath(this.submit_Review).click()
    }
    selectDuration(duration){
        cy.xpath(this.review_Duration).click().type('{downArrow}{downArrow}{enter}',{force:true})
    }
    submitAfterSelectingDuration(){
        cy.xpath(this.submit).click()
    }
    EmailAddress(address){
        cy.xpath(this.mail_Address).type(address).type('{downArrow}{enter}',{force:true})
    }
    sendEmail(){
        cy.xpath(this.send_Email).click()
    }

    mailAssertion(){
        cy.contains(this.send_Assertion).should('have.text',"Successfully sent mail")
        cy.log('Successfully sent mail')
    }
}