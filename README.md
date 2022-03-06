# BMB-Tools

2020 © Renilson Medeiros - nilsdev

Treinando meu primeiro protótipo utilizando React e NodeJS

## Objetivo

:red_car: A aplicação web **BMB-Tools** foi pensada para armazenar as ferramentas emprestadas para outras equipes na competição Baja SAE Brasil que ocorre todos os anos
com acadêmicos de engenharia mecânica. <br> :red_car: Na minha última competição eu pude representar a Universidade Estadual do Maranhão. <br>
:red_car: Algumas ferramentas eram perdidas ao ser emprestadas, e para resolver esse problema, um aplicativo foi construido para guardar informações do tal empréstimo.

## Instalando as ferramentas

* No diretório `./backend`, siga os passos:
  * **1º Passo:** Criar o package.json
    1. Abra o seu terminal na pasta backend
    2. execute `npm init -y`

  * **2º Passo:** Instalar o framework Express
    1. Execute: `npm install express`
    2. Uma pasta chamada node_modules será criada contendo várias outras dependências.

  * **3º Passo:** Criar o arquivo index.js
    > Este será o arquivo principal da aplicação. <br>
    > Neste arquivo você irá definir a porta da sua aplicação. <br>
    > Para isso, use o comando `listen()`

  * **4º Passo:** Rodar a aplicação
    1. Execute `node index.js`
    2. Sua aplicação já pode ser requisitada no navegador
    3. Cannot GET/

* Na pasta do seu projeto
  * **5º Passo:** Executar o React para criar um app React
    1. Abra seu terminal na pasta do seu projeto
    2. Execute: `npx create-react-app nome-do-react-app`
    3. E pronto! Você já tem um app React no seu projeto.
* Na pasta backend
  * **6º Passo:** Instalar o Nodemon
    1. Executar no terminal: `npm install nodemon -D`
    
    > Isso vai servir para atualizar o backend a cada linha de código digitada. <br>
    > Vai evitar que você perca tempo encerrando o servidor e iniciando novamente. <br>
    > **Obs:** O comando `-D` serve para dizer que irá usar o nodemon apenas para desenvolvimento.

  * **7º Passo:** No arquivo package.json
    1. Mude a propriedade `scripts` para:
      ```javascript
      "scripts": {
        "start": nodemon 'diretório-da-sua-aplicação-principal-o-index.js'
      }
      ```
    2. Agora você pode executar no terminal `npm start`

  * **8º Passo:** Instalar o banco de dados
    > Isso pode ser através de um `DRIVER` do próprio banco de dados <br>
    > Ou através de um `QUERRY BUILDER` <br>
    > As sintaxes de cada um são: <br>
    > **Driver:** `SELECT * FROM users`<br>
    > **Query Builder:** `table('users').select('*').where()`
    > Nesse meu app eu vou usar o banco de dados qslite do tipo Query Builder <br>
    > chamado [knex.js](http://knexjs.org/ "Documentação do knex")
    1. Execute: `npm install knex`
    2. Execute: `npm install sqlite3`
    3. Execute: `npx knex init`. Este vai criar um arquivo chamado `knexfile.js`

  * **9º Passo:** Configurando o banco de dados
    1. No arquivo `knexfile.js` mude o dado do filename, na parte de development, para o diretório do seu arquivo que irá conter as suas tabelas.
      ```javascript
      connection: {
        filename: 'diretorio-do-arquivo-das-tabelas'
      }
      ```
    2. Identificar as entidades e as funcionalidades da sua aplicação
    3. Na parte de development do arquivo knexfile.js adicione:
      ```javascript
          migrations: {
            directory: './src/database/migrations'
          }
      ```
    4. Instalar as [migrations](http://knexjs.org/#Installation-migrations "Página das migrations") na sua aplicação.
    5. No terminal execute `npx knex migrate:make nome-da-migration`
      > Irá criar um arquivo no mesmo diretório que você informou acima <br>
      > com alguns números e o nome da sua migration.
      
      > Caso sua aplicação necessite de mais migrations, basta executar o mesmo comando.

      > **Importante:** Para resolver o erro do `useNullAsDefault`. <br> 
      > Adicione: `useNullAsDefault: true` dentro do arquivo knexfile.js.
      
    6. Após criar toda a estrutura da sua tabela, execute no terminal: `npx knex migrate:latest`
      > Irá criar um arquivo com o nome que você definiu no filename.

  * **10º Passo:** Após terminar o backend completo, está na hora de instalar o cors na sua aplicação
    1. No terminal execute: `npm install cors`
    2. **obs:** Não esqueça de dizer ao seu app usar o `cors()`
  
  * **11º Passo:** Instalar um cliente HTTP dentro da sua aplicação
    1. O cliente HTTP é responsável por fazer as chamadas APIs do nosso backend e obter as respostas
    2. Execute no seu terminal: `npm install axios`
    3. Crie um novo arquivo `.js` e acrescente:
      ```javascript
      import axios from 'axios';
      const api = axios.create({
        baseURL: 'http://localhost:3333'
      })
      export default api;
      ```
    4. Caso você esteja usando seu backend em uma outra porta, que não seja a 3333, troque-a no baseURL acrescentando a porta que você esteja usando.
    5. Pronto! Agora você já pode importar a variável api dentro do seus arquivos.
