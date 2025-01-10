const Block = require('./block'); // Importando a classe Block

module.exports = class blockchain {
    constructor() {
        this.blocks = [ new Block(0, null, 'Genesis Block') ]; // Cria o bloco Genesis
        this.nextIndex = 1; // Próximo índice
    }

    getLastHash() {
        return this.blocks[this.blocks.length - 1].hash;
    }

    addBlock(data){
        const lastHash = this.getLastHash();
        const block = new Block(this.nextIndex, lastHash, data);
        this.blocks.push(block);

        this.nextIndex++; // Incrementa o índice
        console.log(`Next index incremented to: ${this.nextIndex}`);
    }

    isValid(){
        
    }
}