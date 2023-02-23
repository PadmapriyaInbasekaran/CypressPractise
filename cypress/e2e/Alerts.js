describe('Alert Test', function() {
    it('Visit qa click academy.com!', function() {
     
cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top")
cy.get("#alertbtn").click()
cy.on('window:alert',(txt)=>{
    expect(txt).to.contains('Hello , share this practice page and share your knowledge');
    })
})
})