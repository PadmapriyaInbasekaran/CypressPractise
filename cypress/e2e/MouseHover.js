describe('Mouse Hover Test', function() {
    it('Visit qa click academy.com!', function() {
     
cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top")
cy.get('#mousehover').trigger("mousehover").get(".mouse-hover-content").contains("Reload").click({force: true})
    })
})