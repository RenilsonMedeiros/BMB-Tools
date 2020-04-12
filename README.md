# BMB-Tools
 Treinando meu primeiro protótipo utilizando React e NodeJS
 ---

 Após instalar todos os aps necessários faça:

  + Na pasta backend:
    * 1º Passo: Criar o package.json
      - Abra o seu terminal na pasta backend
      - Execute: `npm init -y`
    * 2º Passo: Instalar o framework express
      - Execute: `npm install express`
      - Uma pasta chamada node_modules será criada contendo várias outras dependências.
    * 3º Passo: Criar o arquivo index.js
      - Este será o arquivo principal da aplicação
      - Neste arquivo você irá definir a porta da sua aplicação com o comando `listen()`
    * 4º Passo: Rodar a sua aplicação
      - Execute: `node index.js`
      - Sua aplicação já pode ser requisitada no navegador
      - Cannot GET /
 + Na pasta do seu projeto
    * 5º Passo: Executar o React -> Criar um app React
      - Abra seu terminal na pasta do seu projeto
      - Execute: `npx create-react-app nome-do-react-app`
      - E pronto! Você já tem um app React no seu projeto.
	  
 + Na pasta backend
    * 6º Passo: Instalar o Nodemon
	    - Executar no terminal: `npm install nodemon -D`
	    - Isso vai servir para atulizar o teu backend a cada linha de código digitava
	    - Vai evitar que você perca tempo encerrando o servidor e iniciando novamente
	    - O comando `-D` serve para dizer que eu vou usar o nodemon apenas para desenvolvimento.
    * 7º Passo: Na pasta package.json
	    - Mude o scripts para: 
	        ```javascript
          "scripts": {
		  	    "start": nodemon 'diretório-da-sua-aplicação-principal-o-index.js'
		      }
	    - Agora você pode executar no terminal `npm start`
    * 8º Passo: Instalar o teu banco de dados
	    - Pode ser através de um DRIVER do próprio banco de dados
	    - Ou através de um QUERRY BUILDER:
	    - as sintaxes de cada um são
		    Driver: `SELECT * FROM users`.  
		    Query Builder: `table('users').select('*').where()`.  
	    - Nesse meu app eu vou usar o banco de dados sqlite do tipo Query Builder chamado [knex.js](http://knexjs.org/ "Página do knex")
	    - Execute: `npm install knex` 
	    - Execute: `npm install sqlite3`
	    - Execute: `npx knex init`       -> Vai criar uma arquivo chamado knexfile.js
    * 9º Passo: Configurando o banco de dados
	    - No arquivo criado mude o dado do filename, na parte de development, para o diretório do seu arquivo que irá conter as suas tabelas.
        ```javascript
        connection: {
          filename: 'diretorio-do-arquivo-das-tabelas'
        }
        ```
	    - Identificar as entidades e as funcionalidades da sua aplicação
      - Na parte de development do arquivo knexfile.js adicione:
        ```javascript
        migrations: {
          directory: './src/database/migrations'
        }
        ```
      - Instalar as [migrations](http://knexjs.org/#Installation-migrations "Página das migrations") na sua aplicação.
        No terminal execute: `npx knex migrate:make nome-da-migration`. Irá criar um arquivo no mesmo diretório que você informou acima com uns números e o nome da sua migration.
        Se sua aplicação precisar de mais migration, basta executar o mesmo comando.
        Para resolver o erro do `useNullAsDefault`, no arquivo knexfile.js adicione: `useNullAsDefault: true`.
      - Após criar toda a estrutura da sua tabela, execute no terminal: `npx knex migrate:latest` -> Irá criar um arquivo com o nome que você definiu no filename.
    * 10º Passo: Após terminar o backend completo, está na hora de instalar o cors na sua aplicação
      - No terminal execute: `npm install cors`
        
        
   