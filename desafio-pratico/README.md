# Automação de Testes E2E com Cypress

Este projeto contém testes automatizados End-to-End (E2E) desenvolvidos com Cypress, utilizando como base a aplicação:

https://the-internet.herokuapp.com

---

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Git
- GitHub

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm

Verifique com:

```bash
node -v
npm -v
```

---

## Instalação

Clone o repositório:

``` bash
git clone https://github.com/JCGusmao/desafio-qa-jr.git
```

Entre na pasta:

``` bash
cd desafio-qa-jr
cd desafio-pratico
```

Instale as dependências:

``` bash
npm install
```

---

## Executando os testes

Modo interativo (interface do Cypress):

``` bash
npx cypress open
```

Modo headless (via terminal):

```bash
npx cypress run
```

---

## Estrutura do Projeto

```
desafio-pratico/
├── README.md                    
├── package.json                 # Dependências
├── cypress.config.js
├── cypress
│   ├── e2e/                    # Testes E2E
│   ├── fixtures/               # Dados de teste
│   └── support/                # Comandos customizados
└── [outros arquivos de configuração]
```
---

## Documentação dos testes

### Login

Arquivo: `login.cy.js`

Valida:

-   Login com sucesso
-   Login com credenciais inválidas
-   Login com campos vazios

Custom Command utilizado:

``` js
cy.login(userName, senha)
```

Validações aplicadas:

-   Mensagem de sucesso
-   Mensagem de erro
-   Redirecionamento correto

---

### Alert, Confirm e Prompt

Arquivo: `alerts.cy.js`

Valida:

-   Exibição de alert
-   Confirm com OK
-   Confirm com Cancel
-   Prompt com texto
-   Prompt vazio
-   Prompt cancelado

Custom Commands utilizados:

``` js
cy.optionAlert()
cy.optionConfirm()
cy.optionPrompt()
```

Validações aplicadas:

-   Mensagem exibida corretamente
-   Comportamento correto para OK e Cancel

---

### Upload de arquivos

Arquivo: `upload.cy.js`

Valida:

-   Upload via botão
-   Upload via drag and drop

Custom Commands utilizados:

``` js
cy.uploadFile()
cy.dragAndDropFile()
cy.validateUploadedFile()
```

Validações aplicadas:

-   Arquivo enviado corretamente
-   Nome do arquivo exibido na tela

---

### Status Codes

Arquivo: `status-codes.cy.js`

Valida redirecionamento para páginas com status:

-   200
-   301
-   404
-   500

Custom Command utilizado:

``` js
cy.redirectStatus()
```

Validações aplicadas:

-   URL correta
-   Página carregada corretamente

---

### Custom Commands

Arquivo: `cypress/support/commands.js`

Objetivo:

-   Reutilização de código
-   Melhor organização
-   Facilitar manutenção

Exemplos implementados:

-   login
-   uploadFile
-   dragAndDropFile
-   redirectStatus
-   optionAlert
-   optionConfirm
-   optionPrompt

---