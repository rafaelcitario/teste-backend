# 🪙 Desafio Backend - Wefit

## 🚀 Bem-vindo ao Teste de Backend da Wefit

### 🚀 Inicializando o Banco de Dados  

Para configurar o banco de dados, certifique-se de que o **Docker Compose** está instalado em sua máquina. Em seguida, execute o seguinte comando:  

```sh
docker-compose up -d
```

Isso criará um contêiner MySQL acessível via localhost:3306. A senha do usuário root é senha_root_123.

Caso deseje acessar o banco de dados via terminal, utilize:

o docker-compose vai criar um container de um MySQL e você poderá acessar via localhost:3306 e a senha do usuário **root** é **senha_root_123**

se quiser utilizar o banco de dados via terminal digite o comando:

```sh
docker compose exec -it <nome_do_banco> mysql -u root -p
```

Em seguida, digite sua senha para iniciar a sessão no MySQL.

### 📦 Instalando as Dependências  

Para configurar o ambiente do projeto, execute o seguinte comando:  

```sh
npm i
```

Isso instalará todas as bibliotecas necessárias para o funcionamento do projeto.

### 🛠 Dependências Instaladas  

O projeto utiliza as seguintes tecnologias e bibliotecas:  

- **Express** — Framework minimalista para aplicações web.  
- **Typescript** — Tipagem estática para JavaScript.  
  - `@types/express` — Tipagens do Express para melhor suporte no TypeScript.  
  - `ts-node-dev` — Utilitário para executar TypeScript com recarregamento automático.  
  - `tsconfig-paths` — Facilita o uso de aliases em caminhos do TypeScript.  
- **Prisma** — ORM moderno para bancos de dados.  
  - `@prisma/client` — Cliente gerado automaticamente pelo Prisma para consultas ao banco.  
- **Zod** — Biblioteca para validação de esquemas de dados.  
- **dotenv** — Gerenciador de variáveis de ambiente.  

### 🚀 Inicializando o Servidor Express  

Para iniciar o servidor, basta executar um dos seguintes comandos:  

```sh
npm start
```

ou

```sh

yarn start

```

Isso iniciará o ambiente do Express, permitindo que a aplicação comece a receber requisições.

### ⚡ Scripts  

Abaixo estão os principais comandos disponíveis no projeto:  

- **`start`** — Inicia o servidor utilizando `ts-node-dev`, com suporte a `tsconfig-paths` e debugging habilitado.  

```sh
ts-node-dev --files -r tsconfig-paths/register --inspect --ignore-watch node_modules src/index.ts
```

- **`db-reset`** — Reseta todas as migrações do banco de dados.

```sh
npx prisma migrate reset
```

- **`migrate`** — Aplica migrações no banco de dados durante o desenvolvimento.

```sh
npx prisma migrate dev
```

- **`generate`** — Gera os clientes do Prisma com base no esquema definido.

```sh
npx prisma generate
```

### 🏢 Banco de Dados

Este banco de dados foi modelado com base no formulário enviado, seguindo os seguintes conceitos:  

- Um usuário pode se cadastrar informando **nome** e **CPF**.  
- Caso opte pelo cadastro como **pessoa jurídica**, deverá informar um **CNPJ**.  
  - Cada pessoa pode se cadastrar apenas **uma vez**.  
  - Várias pessoas podem compartilhar o mesmo **CNPJ**.  

- O usuário deve informar um **número de contato**, podendo ser **telefone** ou **celular**.  
  - O número pode ser inserido em apenas um dos campos (*exemplo: celular*).  
  - Também é possível cadastrar ambos (*telefone e celular*).  
  - **Obrigatório** informar pelo menos um número para concluir o cadastro.  

- O usuário deve fornecer um **e-mail** no momento do cadastro.  
- O usuário deve fornecer um **endereço completo**, incluindo:  
  - **CEP, rua, número, complemento, cidade, bairro e estado**.  

### 🔹 Estrutura de Tabelas e Relacionamentos

- **Pessoa & CNPJ**  
  - Uma pessoa pode ter **vários CNPJs** (embora apenas **um cadastro por CPF** seja permitido).  
  - Um **CNPJ** pode estar vinculado a **várias pessoas** (usuários podem compartilhar um mesmo CNPJ).  
  - Para representar essa relação **N:N**, foi criada a tabela **users_cnpjs**.  

- **Pessoa & Contato**  
  - Uma pessoa pode ter até **dois números de telefone** (**telefone e celular**).  
  - Um número de telefone pode ser vinculado a **várias pessoas**.  
  - O banco de dados permite **apenas um cadastro por CPF**, mas caso a regra de negócio mude, podemos criar uma **tabela relacional** para telefone, similar ao modelo de CNPJ.  

- **Pessoa & E-mail**  
  - Cada pessoa pode ter **um único e-mail**.  
  - Um e-mail pode ser compartilhado entre **várias pessoas**.  

- **Pessoa & Endereço**  
  - Cada pessoa deve ter **um endereço cadastrado**.  
  - Um endereço pode estar associado a **múltiplos usuários**.  

### 📤 Body da Requisição POST  

Este é o formato esperado para a requisição **POST**, contendo os dados necessários para o cadastro:  

```json
{
    "cnpj": "57387376000118",
    "cpf": "83371884058",
    "name": "Maria da Silva",
    "personType": "juridica",   // Valores possíveis: ["fisica", "juridica"]
    "celular": "11998765432",
    "telefone": "1140028922",
    "phoneType": "ambos",       // Valores possíveis: ["telefone", "celular", "ambos"]
    "email": "maria.silva@empresa.com",
    "cep": "12345678",
    "street": "Avenida dos Negócios",
    "number": 250,
    "complement": "Sala 402 - Edifício Executivo",
    "city": "São Paulo",
    "district": "Centro Empresarial",
    "state": "SP"
}
```

### 🔍 Observações e Possíveis Melhorias

#### 📞 Tipagem dos Números de Contato  

Foi criada uma tipagem específica para cada número de contato (**telefone** e **celular**), sendo necessário que o **frontend** envie a tipagem correta durante o cadastro:  

- Se **apenas o telefone** for preenchido → enviar como `"telefone"`.  
- Se **apenas o celular** for preenchido → enviar como `"celular"`.  
- Se **ambos** forem preenchidos → enviar como `"ambos"`.  

Caso a **regra de negócios** seja alterada, pode-se criar uma **tabela relacional** para armazenar os números de contato e eliminar a necessidade da tipagem.

#### 🔐 Validação de CPF e CNPJ  

Foi implementada a validação de **CPF** e **CNPJ**, porém ainda é possível cadastrar valores gerados no site `4Devs`.  
Para mitigar esse problema, foi criada a tabela **`bloquedCPFs`**, onde são armazenados **CPFs inválidos**.  

- Quando um usuário tenta cadastrar um CPF inválido, ele recebe a mensagem: `"CPF Inválido"`.  
- Nenhum usuário é cadastrado se o **CPF ou CNPJ** estiver incorreto.  

#### 📍 Padronização de Endereços  

Como um mesmo endereço pode ser cadastrado de várias formas (`R.`, `Rua`, `Av.`, `Avenida`, etc.), foi adotada a obrigatoriedade do **CEP** no cadastro.  
Para garantir mais precisão, pode-se integrar o serviço com a **API ViaCep**, permitindo:  

- Ignorar variações na escrita do endereço.  
- Realizar validação automática do **nome da rua, bairro e cidade** a partir do CEP.  

---

### 📌 TODO  

- ✅ Validação da existência dos campos de endereço.  
- 🔄 Refatoração de código (*em andamento*).  
