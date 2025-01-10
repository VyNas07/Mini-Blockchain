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
        const block = new Block(this.nextIndex, lastHash, data, "0" );
        this.blocks.push(block);

        this.nextIndex++; // Incrementa o índice
        console.log(`Next index incremented to: ${this.nextIndex}`);
    }

    isValid(){ //Função para verificar a integridade da blockchain
        for(let i= this.blocks.length - 1; i > 0; i--){ // Loop para percorrer os blocos da blockchain 
            const currentBlock = this.blocks[i]; // Bloco atual
            const previousBlock = this.blocks[i - 1]; // Bloco anterior

            if(currentBlock.hash !== currentBlock.generateHash() 
                || currentBlock.previousHash !== previousBlock.hash 
                || currentBlock.index !== previousBlock.index + 1){ // Verifica se o hash do bloco atual é diferente do hash gerado
                return false; // Retorna falso
            }
        }
        return true //Se passou pela verificação tran quilo, returna true
        
    }
}