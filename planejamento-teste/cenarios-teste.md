# Cenários de Teste - Sistema de Reserva de Salas

Projeto: Sistema de Reserva de Salas  
Autor: Cleyton Gusmão  
Data: 12/02/2026  
Versão: 1.0  

---

# Feature: SP00 - Segurança e Permissões

## CEN-00.01 - Impedir acesso ao sistema sem autenticação

**Dado** que o usuário não está autenticado  
**Quando** ele tenta acessar uma página de reserva  
**Então** o sistema deve redirecionar o usuário para a tela de login  

---

## CEN-00.02 - Impedir acesso a reservas de outros usuários sem permissão

**Dado** que o usuário está autenticado  
**E** existe uma reserva criada por outro usuário  
**Quando** ele tenta acessar essa reserva  
**Então** o sistema deve impedir o acesso  
**E** redirecionar o usuário para a listagem de salas  

---

## CEN-00.03 - Administrador visualiza reservas de qualquer usuário

**Dado** que o usuário com perfil Administrador está autenticado  
**E** existem reservas cadastradas no sistema por outros usuários  
**Quando** o Administrador acessa a lista de reservas  
**Então** o sistema deve exibir todas as reservas existentes no sistema  
**E** deve permitir o acesso aos detalhes de qualquer reserva  

---

## CEN-00.04 - Administrador cancela reserva de qualquer usuário

**Dado** que o usuário com perfil Administrador está autenticado  
**E** existe uma reserva ativa criada por outro usuário  
**Quando** o Administrador solicita o cancelamento da reserva  
**Então** o sistema deve cancelar a reserva com sucesso  
**E** deve atualizar o status da reserva para "Cancelada"  

---


# Feature: RF01 - Visualização de Salas Disponíveis

## CEN-01.01 - Exibir salas ordenadas alfabeticamente

**Dado** que existem salas cadastradas com diferentes status  
**Quando** o usuário acessa a listagem de salas  
**Então** o sistema deve exibir apenas salas com status Disponível ou Ocupada  
**E** não deve exibir salas em manutenção  
**E** deve ordenar as salas alfabeticamente pelo título  

---

## CEN-01.02 - Exibir corretamente as informações da sala

**Dado** que existem salas cadastradas  
**Quando** o usuário visualiza a listagem de salas  
**Então** o sistema deve exibir para cada sala:
    - Nome  
    - Capacidade  
    - Localização  
    - Recursos disponíveis  
    - Status atual  
**E** as informações devem estar corretas  

---


# Feature: RF02 - Busca e Filtros

## CEN-02.01 - Buscar sala pelo nome completo

**Dado** que existe uma sala chamada "Sala A"  
**Quando** o usuário busca por "Sala A"  
**Então** o sistema deve exibir apenas essa sala  

---

## CEN-02.02 - Buscar sala inexistente

**Dado** que não existe sala com o nome buscado  
**Quando** o usuário realiza a busca  
**Então** o sistema deve exibir a mensagem "Nenhuma sala encontrada"  

---

## CEN-02.03 - Buscar sala pelo nome parcial

**Dado** que existe uma sala chamada "Sala A"  
**Quando** o usuário busca por "sala" ou "a"  
**Então** o sistema deve exibir salas que correspondam ao nome digitado independente de maiúsculas ou minúsculas  

---

## CEN-02.04 - Filtrar sala por capacidade mínima

**Dado** que existem salas com diferentes capacidades  
**Quando** o usuário aplica filtro por capacidade mínima  
**Então** o sistema deve exibir apenas salas que atendam ao filtro  

---

## CEN-02.05 - Filtrar sala por recursos

**Dado** que existem salas com diferentes recursos  
**Quando** o usuário aplica filtro por recursos  
**Então** o sistema deve exibir apenas salas compatíveis com os recursos selecionados  

---

## CEN-02.06 - Filtrar sala por localização

**Dado** que existem salas em diferentes localizações  
**Quando** o usuário aplica filtro por localização  
**Então** o sistema deve exibir apenas salas do local selecionado  

---

## CEN-02.07 - Filtrar sala por disponibilidade

**Dado** que existem salas disponíveis e ocupadas  
**Quando** o usuário aplica filtro por disponibilidade  
**Então** o sistema deve exibir apenas salas disponíveis  

---

## CEN-02.08 - Aplicar múltiplos filtros simultaneamente

**Dado** que existem salas com diferentes características  
**Quando** o usuário aplica múltiplos filtros  
**Então** o sistema deve exibir apenas salas que atendam todos os critérios  

---

## CEN-02.09 - Limpar filtros aplicados

**Dado** que existem filtros aplicados  
**Quando** o usuário limpa os filtros  
**Então** o sistema deve exibir todas as salas elegíveis novamente  
**E** ordenadas alfabeticamente pelo título  

---


# Feature: RF03 - Criar Reserva

## CEN-03.01 - Criar reserva válida com sucesso

**Dado** que o usuário está autenticado  
**E** seleciona uma sala disponível  
**Quando** ele preenche todos os campos obrigatórios corretamente  
**E** confirma a reserva  
**Então** o sistema deve criar a reserva com status Confirmada  
**E** enviar confirmação ao usuário  
**E** alterar status da sala para Ocupada naquela data e horário

---

## CEN-03.02 - Impedir reserva em horário já ocupado

**Dado** que existe uma reserva no mesmo horário  
**Quando** o usuário tenta criar uma nova reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem de indisponibilidade de horário  

---

## CEN-03.03 - Impedir reservas simultâneas para o mesmo horário

**Dado** que dois usuários tentam reservar a mesma sala e horário  
**Quando** ambos confirmam a reserva  
**Então** apenas a reserva do usuário que confirmou primeiro deve ser criada  
**E** o segundo usuário deve receber a mensagem de indisponibilidade de horário  

---

## CEN-03.04 - Impedir reserva com conflito parcial de horário

**Dado** que existe uma reserva em um período específico  
**Quando** o usuário tenta criar uma reserva com horário parcialmente conflitante  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem de indisponibilidade de horário  

---

## CEN-03.05 - Impedir reserva quando usuário possui 3 reservas ativas

**Dado** que o usuário já possui 3 reservas ativas  
**Quando** ele tenta criar uma nova reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem informando o limite de 3 reservas ativas por usuário  

---

## CEN-03.06 - Impedir reserva fora do horário comercial

**Dado** que o horário selecionado está fora do horário comercial  
**Quando** o usuário tenta criar a reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem informando que não é possível reservar salas fora do horário comercial (08:00 às 18:00)  

---

## CEN-03.07 - Impedir reserva em data passada

**Dado** que o usuário seleciona uma data passada  
**Quando** tenta criar a reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem informando que não é possível selecionar datas passadas para reservar

---

## CEN-03.08 - Impedir reserva com mais de 30 dias de antecedência

**Dado** que o usuário seleciona uma data além do limite permitido  
**Quando** tenta criar a reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem informando que não é possível criar reservas com mais de 30 dias de antecedência  

---

## CEN-03.09 - Impedir reserva com horário inválido

**Dado** que o horário final é menor que o inicial  
**Quando** o usuário tenta criar a reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem informando que não é possível criar reservas com o horário final menor que o inicial  

---

## CEN-03.10 - Impedir reserva com duração menor que o permitido

**Dado** que a duração é menor que 30 minutos  
**Quando** o usuário tenta criar a reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem informando que a duração mínima permitida é de 30 minutos  

---

## CEN-03.11 - Impedir reserva com duração maior que o permitido

**Dado** que a duração é maior que 8 horas  
**Quando** o usuário tenta criar a reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem informando que a duração máxima permitida é de 8 horas  

---

## CEN-03.12 - Impedir reserva com participantes acima da capacidade

**Dado** que o número de participantes excede a capacidade da sala  
**Quando** o usuário tenta criar a reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem informando que o número de participantes excede a capacidade da sala  

---

## CEN-03.13 - Validar campos obrigatórios

**Dado** que existem campos obrigatórios não preenchidos  
**Quando** o usuário tenta criar a reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem informando que existem campos obrigatórios não preenchidos  
**E** indicar visualmente os campos obrigatórios que não foram preenchidos  

---

## CEN-03.14 - Validar tamanho mínimo do título

**Dado** que o título possui menos de 5 caracteres  
**Quando** o usuário tenta criar a reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem informando que o título possui menos de 5 caracteres  

---

## CEN-03.15 - Impedir reservas em feriado

**Dado** que a data selecionada é um feriado  
**Quando** o usuário tenta criar a reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem informando que não é possível realizar reservas em feriados  

---

## CEN-03.16 - Utilizar fuso horário correto

**Dado** que o usuário cria uma reserva para um horário específico  
**Quando** visualiza os detalhes da reserva  
**Então** o sistema deve exibir o horário no fuso UTC-3 corretamente 

---

## CEN-03.17 - Impedir reserva com 0 participantes

**Dado** que o número de participantes é 0  
**Quando** o usuário tenta criar a reserva  
**Então** o sistema deve impedir a criação  
**E** exibir a mensagem informando que a quantidade de participantes não pode ser 0  

---

# Feature: RF04 - Visualizar Minhas Reservas

## CEN-04.01 - Visualizar reservas do usuário

**Dado** que o usuário possui reservas  
**Quando** acessa "Minhas Reservas"  
**Então** o sistema deve exibir apenas as reservas do usuário  

---

## CEN-04.02 - Exibir reservas concluídas separadamente

**Dado** que o usuário possui reservas concluídas  
**Quando** acessa a listagem  
**Então** o sistema deve exibi-las separadamente  

---

## CEN-04.03 - Exibir reservas canceladas com destaque

**Dado** que o usuário possui reservas canceladas  
**Quando** acessa a listagem  
**Então** o sistema deve destacá-las visualmente  

---

## CEN-04.04 - Filtrar reservas por status

**Dado** que existem reservas com diferentes status  
**Quando** o usuário aplica o filtro por status  
**Então** o sistema deve exibir reservas com o(s) status selecionado(s) no filtro  

---

## CEN-04.05 - Filtrar reservas por período

**Dado** que existem reservas em diferentes períodos  
**Quando** o usuário aplica o filtro selecionando o período  
**Então** o sistema deve exibir reservas com o período escolhido  

---

## CEN-04.06 - Ordenar reservas por data

**Dado** que o usuário está autenticado  
E existem reservas em diferentes datas  
**Quando** o usuário ordena as reservas por data  
**Então** o sistema deve exibir as reservas ordenadas corretamente  

---

## CEN-04.07 - Usuário sem reservas

**Dado** que o usuário está autenticado  
**E** o usuário não possui nenhuma reserva cadastrada  
**Quando** acessa a listagem de reservas  
**Então** o sistema deve exibir mensagem informando que o usuário não possui reservas  

---


# Feature: RF05 - Cancelar Reserva

## CEN-05.01 - Cancelar reserva válida

**Dado** que o usuário criou ao menos uma reserva  
**E** a reserva inicia em mais de 2 horas  
**E** a reserva possui duração menor que 4 horas  
**Quando** o usuário confirma o cancelamento da reserva  
**Então** a reserva deve ter o status alterado para "Cancelada"  
**E** o sistema deve enviar um e-mail de confirmação do cancelamento  
**E** a sala deve voltar a ficar disponível naquela data e horário  

---

## CEN-05.02 - Impedir cancelamento por usuário não autorizado

**Dado** que o usuário está autenticado  
**E** a reserva foi criada por outro usuário  
**Quando** o usuário tenta cancelar a reserva  
**Então** o sistema deve impedir o cancelamento  
**E** deve exibir mensagem informando que apenas o criador pode cancelar a reserva  

---

## CEN-05.03 - Permitir cancelamento por administrador

**Dado** que o usuário com perfil Administrador está autenticado  
**E** existe uma reserva ativa criada por outro usuário  
**Quando** o Administrador solicita o cancelamento da reserva  
**Então** o sistema deve permitir o cancelamento da reserva  
**E** deve atualizar o status da reserva para "Cancelada"  
**E** a sala deve voltar a ficar disponível naquele período  

---

## CEN-05.04 - Impedir cancelamento após início

**Dado** que o usuário está autenticado  
**E** o usuário é o criador da reserva  
**E** o horário atual é igual ou posterior ao horário de início da reserva  
**Quando** o usuário tenta cancelar a reserva  
**Então** o sistema deve impedir o cancelamento  
**E** deve exibir mensagem informando que não é possível cancelar uma reserva já iniciada  

---

## CEN-05.05 - Impedir cancelamento com menos de 2 horas de antecedência

**Dado** que o usuário está autenticado  
**E** é o criador da reserva  
**E** a reserva inicia em menos de 2 horas  
**E** possui duração inferior à 4 horas  
**Quando** o usuário tenta cancelar  
**Então** o sistema deve impedir o cancelamento  
**E** deve exibir mensagem informando que não é possível cancelar uma reserva com menos de 2 horas de antecedência  

---

## CEN-05.06 - Permitir cancelar reserva com duração superior a 4 horas respeitando antecedência mínima de 24h

**Dado** que o usuário está autenticado  
**E** é o criador da reserva  
**E** a reserva possui duração superior a 4 horas  
**E** o início da reserva ocorre em mais de 24 horas 
**Quando** o usuário solicita o cancelamento da reserva  
**Então** o sistema deve permitir o cancelamento  
**E** deve atualizar o status da reserva para "Cancelada"  
**E** a sala deve voltar a ficar disponível naquele período  
**E** o usuário deve receber um e-mail confirmando o cancelamento  

---

## CEN-05.07 - Impedir cancelar reserva com duração superior a 4 horas sem respeitar antecedência mínima de 24h

**Dado** que o usuário está autenticado  
**E** é o criador da reserva  
**E** a reserva possui duração superior a 4 horas  
**E** o início da reserva ocorre em menos de 24 horas 
**Quando** o usuário solicita o cancelamento da reserva 
**Então** o sistema deve impedir o cancelamento  
**E** deve exibir mensagem informando que reservas com duração superior a 4 horas só podem ser canceladas com antecedência mínima de 24 horas  
**E** o status da reserva deve permanecer "Confirmada"  

---

# Feature: RF06 - Visualizar Detalhes da Reserva

## CEN-06.01 - Visualizar detalhes completos

**Dado** que o usuário está autenticado  
**E** possui uma reserva vinculada à sua conta  
**Quando** o usuário acessa os detalhes da reserva  
**Então** o sistema deve exibir as seguintes informações:  
    - Sala  
    - Data da reserva  
    - Horário de início e término  
    - Título da reserva  
    - Participantes  
    - Observações (se houver)  
    - Status atual da reserva  
    - Data de criação  
    - Histórico de alterações (se houver)  
    - Botões de ação disponíveis (ex: Cancelar, se permitido)  

---

## CEN-06.02 - Exibir botão de cancelamento quando as regras permitirem

**Dado** que o usuário está autenticado  
**E** é o criador da reserva  
**E** a reserva está com status "Confirmada"  
**E** o cancelamento é permitido de acordo com as regras de antecedência  
**Quando** o usuário acessa os detalhes da reserva  
**Então** o sistema deve exibir o botão "Cancelar"  

---

## CEN-06.03 - Ocultar botão de cancelamento quando as regras não permitirem

**Dado** que o usuário está autenticado  
**E** é o criador da reserva  
**E** a reserva não atende às regras de cancelamento  
**Quando** o usuário acessa os detalhes da reserva  
**Então** o sistema não deve exibir o botão "Cancelar"  

---
