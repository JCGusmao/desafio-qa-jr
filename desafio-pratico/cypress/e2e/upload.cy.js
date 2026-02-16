
describe('Upload de arquivos', () => {

  const filePdf = 'cypress/fixtures/files/arquivo.pdf'
  const fileJpeg = 'cypress/fixtures/files/arquivo.jpeg'

  beforeEach(() => {

    cy.visit('/upload')

  })

  it('Deve realizar o upload do arquivo clicando no botão "Escolher arquivo"', () => {

    cy.uploadFile(filePdf)

    cy.validateUploadedFile('arquivo.pdf')

  })

  it('Deve realizar o upload do arquivo arrastando para o campo em vermelho', () => {

    cy.dragAndDropFile(fileJpeg, 'arquivo.jpeg')

    cy.get('.dz-success')
      .should('be.visible')
      .and('contain', 'arquivo.jpeg')

  })

})