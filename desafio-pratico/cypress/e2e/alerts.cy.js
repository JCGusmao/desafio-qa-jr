describe('Disparar alertas no sistema', () => {

  beforeEach(() => {
    cy.visit('/javascript_alerts')
  })

  it('Deve disparar o alerta após clicar no botão', () => {
    cy.optionAlert('You successfully clicked an alert')
  })

  it('Deve disparar o alerta de confirmação e clicar em "Ok"', () => {
    cy.optionConfirm(true, 'You clicked: Ok')
  })

  it('Deve disparar o alerta de confirmação e clicar em "Cancelar"', () => {
    cy.optionConfirm(false, 'You clicked: Cancel')
  })

  it('Deve abrir o prompt e digitar "Teste"', () => {
    cy.optionPrompt('Teste', 'You entered: Teste')
  })

  it('Deve abrir o prompt e clicar em "Cancelar sem preencher o campo"', () => {
    cy.optionPrompt(null, 'You entered: null')
  })

  it('Deve abrir o prompt e apertar "Ok" sem preencher o campo', () => {
    cy.optionPrompt("", 'You entered: ')
  })

})
