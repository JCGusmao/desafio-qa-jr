# Perguntas Teóricas - Desafio QA Jr.

Responda as perguntas abaixo de forma clara e objetiva. Use exemplos quando apropriado.

---

## 1. Conceitos Básicos de QA

### 1.1 Testes de Regressão
O que é um teste de regressão e quando devemos executá-lo? Dê um exemplo prático.

**Espaço para resposta:**
```
O teste de regressão garante que uma alteração no sistema, como correção de bug, nova funcionalidade ou atualização de código, não afete funcionalidades que já estavam funcionando corretamente.
Ele deve ser executado sempre que houver mudanças no sistema, principalmente antes de liberar uma nova versão para produção, garantindo que o sistema continue estável e sem impactos negativos em funcionalidades existentes.

Por exemplo, em um sistema de e-commerce, o time desenvolve uma nova funcionalidade de cupom de desconto. Após essa alteração, são executados testes de regressão para garantir que o login, cadastro, adição ao carrinho e finalização da compra continuam funcionando normalmente. 
```

---

### 1.2 Tipos de Testes
Explique a diferença entre teste funcional e teste não-funcional. Dê exemplos de cada tipo.

**Espaço para resposta:**
```
Testes funcionais verificam se as funcionalidades do sistema estão funcionando conforme o esperado, validando as regras de negócio e comportamentos da aplicação.

Já os testes não-funcionais avaliam como o sistema se comporta, verificando aspectos de qualidade como desempenho, segurança e usabilidade.


Por exemplo: 
- Validar o login de um usuário com dados válidos é um teste funcional.  
- Verificar se o sistema mantém um bom desempenho com muitos usuários acessando ao mesmo tempo é um teste não-funcional.
```

---

## 2. Testes Automatizados vs. Manuais

### 2.1 Vantagens e Desvantagens
Quais são as principais vantagens e desvantagens de testes automatizados em relação a testes manuais? Em que situações você priorizaria cada abordagem?

**Espaço para resposta:**
```
Os testes automatizados têm como vantagens a rapidez, a redução de erros humanos e a economia de tempo em testes repetitivos, sendo ideais para cenários executados com frequência, como testes de regressão e fluxos críticos. Como desvantagens, exigem configuração inicial, conhecimento técnico e manutenção.  
Já os testes manuais são mais flexíveis e indicados para testes exploratórios, validação de interface e funcionalidades novas. Como desvantagens, são mais lentos e sujeitos a falhas humanas.

Eu costumo priorizar a automação em cenários estáveis, fluxos críticos e repetitivos, e os testes manuais em funcionalidades novas ou situações em que a automação não compensa.
```

---

### 2.2 Estratégia de Automação
Como você decidiria quais funcionalidades automatizar primeiro? Quais critérios você usaria para priorizar?

**Espaço para resposta:**
```
Eu priorizo automatizar funcionalidades mais críticas e repetitivas do sistema, como login, cadastro e fluxos principais de negócio. 

Os principais critérios seriam o impacto para o usuário, a frequência de uso, o risco de falhas e a estabilidade da funcionalidade.
```

---

## 3. Ferramentas de Automação

### 3.1 Cypress vs. Playwright
Quais são as principais diferenças entre Cypress e Playwright? Em que cenários você escolheria cada uma?

**Espaço para resposta:**
```
O Cypress é uma ferramenta mais simples de configurar e muito usada para testes de front-end, sendo uma boa opção para projetos menores.  
Pelo que eu li sobre o Playwright, ele é mais utilizado em cenários que exigem suporte a vários navegadores e testes mais complexos.

O Cypress é indicado para automações mais simples e rápidas, e o Playwright para projetos que precisem de maior cobertura de navegadores.
```

---

### 3.2 Elementos Assíncronos
Como você lidaria com elementos que demoram para carregar em testes E2E? Quais estratégias você usaria?

**Espaço para resposta:**
```
Eu utilizo esperas automáticas do Cypress, aguardando o elemento ficar visível ou habilitado antes de interagir. Por exemplo, esperar um botão aparecer na tela antes de clicar ou aguardar o carregamento de uma lista antes de validar os dados.  
Também procuro utilizar seletores estáveis e acompanhar o tempo de execução dos testes. Caso o carregamento demore além do esperado e impacte o teste, o ideal é reportar ao time, para investigar se é um problema de desempenho ou da própria aplicação.
```

---

## 4. Organização e Boas Práticas

### 4.1 Estrutura de Testes
Como você organizaria uma suíte de testes E2E para facilitar manutenção e escalabilidade? Descreva uma estrutura de diretórios e explique suas escolhas.

**Espaço para resposta:**
```
Eu costumo organizar a suíte separando os arquivos por funcionalidade dentro da pasta e2e, facilitando a manutenção e a escalabilidade do projeto.

Uma estrutura simples poderia ser:

cypress/
  e2e/
      login.cy.js
      cadastro.cy.js
      carrinho.cy.js
  support/
    commands.js
    e2e.js
  fixtures/
    usuarios.json

Dessa forma os testes ficam organizados por funcionalidade dentro da pasta e2e, facilitando a localização e a manutenção dos cenários. A pasta support uso para comandos customizados e configurações, e a pasta fixtures para dados de teste.
```

---

### 4.2 Page Object Model
O que é Page Object Model (POM)? Quais são as vantagens de usar esse padrão? Dê um exemplo prático.

**Espaço para resposta:**
```
POM é um padrão de organização de testes onde cada página do sistema é representada por uma classe ou arquivo, contendo os elementos e as ações daquela página.
A principal vantagem é a organização e a reutilização de código, facilitando a manutenção quando a interface muda.

Por exemplo, em vez de repetir o código de login em vários testes, cria-se um método como “realizarLogin”, que é reutilizado nos cenários, deixando o código mais limpo e fácil de manter.

No Cypress, costumo utilizar custom commands no lugar de POM, pois eles permitem reutilizar ações de forma mais simples e facilita a manutenção do teste.
```

---

## 5. Cenários Práticos

### 5.1 Testes Independentes
Como você garantiria que seus testes sejam independentes e possam rodar em qualquer ordem? Quais práticas você seguiria?

**Espaço para resposta:**
```
Evitando que um teste dependa do resultado de outro e evitando compartilhar estado entre testes, como reutilizar sessões ou dados criados em cenários diferentes.
```

---

## 6. Processo e Metodologia

### 6.1 BDD
Explique o que é BDD (Behavior-Driven Development) e como ele se relaciona com QA. Você já trabalhou com BDD? Se sim, compartilhe sua experiência.

**Espaço para resposta:**
```
BDD é uma forma de descrever o comportamento esperado do sistema de um jeito mais próximo da linguagem do usuário, usando o formato Dado, Quando, Então.
Dessa forma, todo o time consegue ter o mesmo entendimento sobre o que deve ser desenvolvido e testado.

Já utilizei BDD para escrever cenários em Gherkin, para organizar os testes e deixar os fluxos mais claros para o time.
```

---

### 6.2 Integração com CI/CD
Como você integraria testes automatizados em um pipeline de CI/CD? Quais são os principais pontos de atenção?

**Espaço para resposta:**
```
Ainda não atuei muito na prática com CI/CD, mas entendo o conceito. Os testes automatizados entram como uma etapa do pipeline e rodam a cada PR ou merge, impedindo que código com falha avance. 

Os principais pontos são garantir que os testes sejam estáveis e confiáveis, porque testes flakey acabam quebrando o pipeline sem indicar um problema real.
```

---

## Observações Finais

Use este espaço para adicionar qualquer observação, dúvida ou comentário adicional:

```
[Seu texto aqui]
```

---

**Obrigado por completar as perguntas teóricas!** 

Agora você pode seguir para o [Planejamento de Testes](../planejamento-teste/README.md).
