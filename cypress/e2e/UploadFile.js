describe('File upload Test', function () {
    it('Upload file in cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        const filepath = 'files/Software Architecture Assignment.docx'
        cy.get('#file-upload').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('Software Architecture Assignment.docx')
    })
})