
describe('Redirecionamento páginas status code', () => {

    beforeEach(() => {
        cy.visit('/redirector')
        cy.contains('p', 'This is separate from directly returning a redirection status code, in that some browsers cannot handle a raw redirect status code without a destination page as part of the HTTP response.')
            .should('be.visible')

        cy.get("#redirect[href='redirect']")
            .click()

        cy.location('pathname')
            .should('eq', '/status_codes')

    })

    it('Deve direcionar para a página de status code 200', () => {
        cy.redirectStatus(

            "[href='status_codes/200']",
            '/status_codes/200',
            'This page returned a 200 status code.'
        )

    })

    it('Deve direcionar para a página de status code 301', () => {
        cy.redirectStatus(
            "[href='status_codes/301']",
            '/status_codes/301',
            'This page returned a 301 status code.'
        )

    })

    it('Deve direcionar para a página de status code 404', () => {
        cy.redirectStatus(
            "[href='status_codes/404']",
            '/status_codes/404',
            'This page returned a 404 status code.'
        )

    })

    it('Deve direcionar para a página de status code 500', () => {
        cy.redirectStatus(
            "[href='status_codes/500']",
            '/status_codes/500',
            'This page returned a 500 status code.'
        )

    })

})