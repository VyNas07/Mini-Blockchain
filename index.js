const Blockchain = require('./Blockchain'); // Importando a classe Blockchain

const blockchain = new Blockchain(); // Criando uma nova instância da classe Blockchain
blockchain.addBlock({from: 'Vyktor', to: 'Fellype', amount: 35}); // Adicionando um bloco à blockchain

console.log(blockchain); // Exibindo a blockchain no console