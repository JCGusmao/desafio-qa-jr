import users from "../fixtures/users.json"

describe('Cenários de login', () => {

  beforeEach(() => {
    cy.visit('/login')
  })

  it('Deve realizar login com credenciais válidas', () => {
    cy.login(users.validUser.userName, users.validUser.password)

    cy.url()
      .should('include', '/secure')

    cy.get(".success[data-alert='']")
      .should('be.visible')
      .and('contain', 'You logged into a secure area!')

    cy.get(".button[href='/logout']")
      .should('be.visible')
  })

  it('Deve realizar login com credenciais inváldas', () => {

    cy.login(users.invalidUser.userName, users.invalidUser.password)

    cy.url()
      .should('include', '/login')

    cy.get(".error[data-alert='']")
      .should('be.visible')
      .and('contain', 'Your username is invalid!')
  })

  it('Deve realizar login com os campos em branco', () => {

    cy.get("[name='username']")

    cy.get("[name='password']")

    cy.get("button[type='submit']").click()

    cy.url()
      .should('include', '/login')

    cy.get(".error[data-alert='']")
      .should('be.visible')
      .and('contain', 'Your username is invalid!')
  })
})