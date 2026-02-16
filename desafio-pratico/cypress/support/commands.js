Cypress.Commands.add('login', (userName, senha) => {

    cy.get("[name='username']")
        .should('be.visible')
        .type(userName)

    cy.get("[type='password']")
        .should('be.visible')
        .type(senha)

    cy.get("button[type='submit']")
        .should('be.visible')
        .click()

})

Cypress.Commands.add('uploadFile', (file) => {

    cy.get('#file-upload')
        .should('be.visible')
        .selectFile(file)

    cy.get('#file-submit')
        .should('be.visible')
        .click()

})

Cypress.Commands.add('dragAndDropFile', (file, fileName) => {

    cy.get('#drag-drop-upload')
        .should('be.visible')
        .selectFile(file, { action: 'drag-drop' })

})

Cypress.Commands.add('validateUploadedFile', (fileName) => {

    cy.get('#uploaded-files')
        .should('be.visible')
        .and('contain', fileName)

})


Cypress.Commands.add('optionAlert', (result) => {

    cy.on('window:alert', (text) => {
        expect(text).to.eq('I am a JS Alert')
    })

    cy.contains("Click for JS Alert").click()

    cy.get('#result')
        .should('be.visible')
        .and('have.text', result)

})

Cypress.Commands.add('optionConfirm', (action, result) => {

    cy.on('window:confirm', (text) => {
        expect(text).to.eq('I am a JS Confirm')
        return action
    })

    cy.contains("Click for JS Confirm")
        .click()

    cy.get('#result')
        .should('be.visible')
        .and('have.text', result)

})

Cypress.Commands.add('optionPrompt', (value, result) => {

    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns(value)
    })

    cy.contains("Click for JS Prompt")
        .click()

    cy.get('#result')
        .should('be.visible')
        .and('contain', result)

})

Cypress.Commands.add('redirectStatus', (selectorLink, expectedPath, expectedText) => {

    cy.get(selectorLink)
        .should('be.visible')
        .click()

    cy.location('pathname')
        .should('eq', expectedPath)

    cy.contains('p', expectedText)
        .should('be.visible')

})
