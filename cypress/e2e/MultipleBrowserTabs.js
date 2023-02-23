describe('Multiple Browser Tabs Test', function() {
    it('Visit qa click academy.com!', function() {
     
cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top")
cy.get('#opentab').invoke("removeAttr","target").click()
cy.get('.top-left > .clearfix > li ').should("have.text"," contact@rahulshettyacademy.com")
    })
})