# Projeto Agência de Viagens - Recode Pro 2021
## BlueBird Viagens - v3
### Desenvolvedor: Vítor Mateus Santos Parreiras

Desenvolvimento de um site para clientes realizarem cadastro e aquisições de viagens de uma agência fictícia chamada **BlueBird Viagens**. Versão 3: ReactJS, Spring, PostgreSQL.

<div align="center">
  <img alt="readme" title="readme" src="./media/readme.gif"/>
</div>

#### Modelagem Entidade-Relacionamento
![Modelagem Entidade-Relacionamento](./banco-de-dados/modelagem_ER.png)

#### Instalação e Configuração

###### 1. Banco de dados
1. Será necessário ter o PostgreSQL instalado e sem um banco de dados de nome *agenciaviagens*.
2. Rode o script banco-de-dados/criarBD.sql no PostgreSQL.

###### 2. Backend
1. No Eclipse, adicione o projeto existente na pasta backend/AgenciaViagens ao seu workspace.
2. Edite o arquivo backend/AgenciaViagens/src/main/java/models/persistence/ConnectionFactory.java, nas linhas 7, 8 e 9, inserindo o seu usuário, senha, endereço e porta de conexão com o banco de dados.
```
private static final String USERNAME = "root";
private static final String PASSWORD = "";
private static final String DATABASE_URL = "jdbc:mysql://localhost:3306/agenciaviagens";
```
3. Execute o projeto com o Tomcat. A aplicação irá ouvir a porta 8080.

###### 3. Frontend
1. Execute o comando abaixo na pasta frontend para instalar as dependencias do React:
```
npm install
```

#### Execução
Inicie o banco de dados e o servidor Apache Tomcat e execute um dos comandos abaixo na pasta frontend para rodar o React:
```
npm start
```

```
yarn start
```
Após todas as aplicações iniciarem corretamente, o sistema estará em funcionamento.