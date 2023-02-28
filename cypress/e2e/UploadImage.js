describe('Image upload Test', function () {
    it('Upload image in cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        const filepath = 'images/Screenshot.png'
        cy.get('#file-upload').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('Screenshot.png')
    })
})