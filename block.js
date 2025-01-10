const sha256 = require('crypto-js/sha256'); // Importando a biblioteca e o algoritmo de criptografia

module.exports = class Block { //Classe Block serve como estrutura básica para os blocos da blockchain
    constructor(index, previousHash = null, data = 'Genesis Block', difficulty = "") { //É chamado quando um novo bloco é criado e inicializa os atributos da classe
        this.nonce = 0; // Inicializa o nonce
        this.index = index; // Número do bloco 
        this.data  = data; // Dados armazenados no bloco
        this.timestamp = new Date(); // Data e hora de criação do bloco
        this.previousHash = previousHash; // Hash do bloco anterior

        this.mine(difficulty); // Minera o bloco
    }

    mine(prefix){ //prefix é a quantidade de zeros que o hash deve ter no início (dificuldade)
        do{
            this.nonce++; // Incrementa o nonce
            this.hash = this.generateHash(); // Gera o hash
        }
        while(!this.hash.startsWith(prefix));
    }
    generateHash() {
        return sha256(this.index + this.previousHash + JSON.stringify(this.data) + this.timestamp + this.nonce).toString(); // Gera o hash do bloco
    }
}