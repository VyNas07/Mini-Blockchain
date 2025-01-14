# Mini-Blockchain

Este projeto é uma implementação simples de uma blockchain em JavaScript. Ele foi criado como parte de um estudo sobre a tecnologia blockchain. A blockchain local permite a criação de blocos, cada um contendo dados de transações, e a adição desses blocos à cadeia.

## Funcionalidades

- Criação de uma blockchain com um bloco gênesis.
- Adição de novos blocos com dados de transações.
- Geração de hash para cada bloco utilizando o algoritmo SHA-256.
- Verificação da integridade da blockchain.

## Instalação

Para instalar as dependências do projeto, execute:
````
npm install
````

## Uso

Para executar o projeto, utilize o seguinte comando:
````
node index.js
````

## Estrutura do Projeto

- block.js: Define a classe Block, que representa um bloco na blockchain.
- Blockchain.js: Define a classe Blockchain, que gerencia a cadeia de blocos.
- index.js: Script principal que cria uma instância da blockchain e adiciona blocos.
- package.json: Arquivo de configuração do npm, contendo as dependências do projeto.
- .gitignore: Arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo Git.
- README.md: Este arquivo, contendo informações sobre o projeto.

## Exemplo de uso

Aqui está um exemplo de como utilizar a blockchain:

````
const Blockchain = require('./Blockchain'); // Importando a classe Blockchain

const blockchain = new Blockchain(); // Criando uma nova instância da classe Blockchain

blockchain.addBlock({ from: 'Vyktor', to: 'Fellype', amount: 35 }); // Adicionando um bloco à blockchain
blockchain.addBlock({ from: 'Nascimento', to: 'Vyktor', amount: 5 }); // Adicionando um bloco à blockchain

console.log(blockchain); // Exibindo a blockchain no console
console.log(blockchain.isValid()); // Verificando a integridade da blockchain
````
