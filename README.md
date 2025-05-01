## Backend - Wefit

Seja bem vindo ao teste de backend da Wefit.

### Para iniciar o banco de dados é necessario ter o docker-compose instalado em sua máquina e rodar o seguinte comando:

    docker-compose up -d

o docker-compose vai criar um container de um MySQL e você poderá acessar via localhost:3306 e a senha do usuário **root** é **senha_root_123**

se quiser utilizar o banco de dados via terminal digite o comando:
    - docker compose exec -it <nome do banco> mysql -u root -p
    - digite sua senha

### Para instalar as dependencias do projeto basta executar o seguinte comando:
    npm i
#### Dependencias instaladas no projeto:
    - Express
    - Typescript
        - @types/express
        - ts-node-dev
        - tsconfig-paths
    - Prisma
        - @prisma/client
    - Zod
    - dotenv
##### Scripts:
    - "start": "ts-node-dev --files -r tsconfig-paths/register --inspect --ignore-watch node_modules  src/index.ts",
    - "db-reset": "npx prisma migrate reset",
    - "migrate": "npx prisma migrate dev",
    - "generate": "npx prisma generate"

### Banco de dados
    Este banco de dados foi modelado de acordo com o formulário enviado.
    Foram seguidos os seguintes conceitos:
        Um usuário podera se cadastrar informando dados como nome, cpf
        caso a pessoa escolha se cadastrar como pessoa jurídica ela deve informar o cnpj.
            Uma pessoa pode cadastrar apenas uma vez
            mas varias pessoas podem partilhar o mesmo cnpj
        O usuário devera informar um número de contato sendo telefone ou celular
            Uma pessoa pode cadastrar inserindo o número em um dos campos. Ex: celular
            Uma pessoa pode cadastrar inserindo em ambos os campos. Ex: telefone e Celular
            Uma pessoa não pode cadastrar sem informar telefone ou celular
        O usuário deve informar um e-mail no momento do cadastro
        O usuário deve informar um endereço completo no momento do cadastros, sendo nescessarios:
            cep, rua, numero, complemento, cidade, bairro e estado

    Foram criadas tabelas e relações entre elas sendo:
        1 pessoa pode ter varios cnpjs (embora possa ter somente 1 cadastro por cpf)
            1 cnpj pode possuir a varias pessoas (usuários podem partilhar do mesmo cnpj)
            para que haja a relação N:N foi criada uma tabela users_cnpjs como relacional
        1 pessoa pode ter varios(2) telefones (sendo telefone e celular)
            1 telefone (telefone e celular) pertencem a varias pessoas
             Foi modelado desta forma pois o banco só permite 1 cadastro por cpf, caso a regra de negocios mude podemos criar uma tabela relacional assim como cnpj
        1 pessoa pode ter um email
            1 email pode pertencer a várias pessoas
        1 pessoa pode ter um endereço
            1 endereço pode pertencer a várias pessoas

### Observações e possiveis melhorias:
    Foi criado uma tipagem para cada numero de contato (telefone e celular) sendo nescessario a verificação realizada via frontend
        caso somente o campo telefone estiver preenchido no momento do cadastro o frontend devera enviar uma tipagem como (`telefone`)
        caso somente o campo celular estiver preenchido no momento do cadastro o frontend devera enviar uma tipagem como (`celular`)
        caso ambos os campos estiverem preenchidos no momento do cadastro o frontend devera enviar uma tipagem como (`ambos`)
        - Caso a regra de negocios mude pode ser criada uma tabela relacional e assim retirar a tipagem (telefone, celular, ambos)

    Foram realizadas validações em CPF e CNPJ mas ainda sendo possivel o cadastro com CPFs e CNPJs gerados no site: `4Devs`
        Foi criada uma tabela `bloquedCPFs` onde são salvos CPFs invalidos no momento do cadastro
        Para o usuário que cadastrou apenas apresentamos a menssagem ( CPF Inválido )
        Nenhum usuário é cadastrado caso CPF ou CNPJ esteja incorreto.

    Muitas pessoas podem cadastrar o mesmo endereço havendo diferentes formas de escrita (R., Rua, Av. Avenida, rUa, AvEniDa ... )
        sendo assim como é obrigatório o usuário informar o CEP, pode-se integrar o serviço com API ViaCep
        Assim ignorando ou até mesmo podendo realizar verificação no nome da rua, bairro e cidade por meio do CEP
    
    
    TODO: 
    - [x] Validação existencia dos campos de endereço
    - [ ] Refatoração de código
    
### Para iniciar o servidor express basta executar o seguinte comando:

    npm start
    ou
    yarn start

Depois que concluir seu teste não de enviar o seu código junto a pasta data, nela está salvo o volume do MySQL criado pelo docker.

Boa sorte =)
