const Personagem = require("./personagem");

class Heroi extends Personagem{
    moedas = 0;

    constructor(vida, nome, fome, forca){
        super(vida);
        this.nome = nome;
        this.fome = fome;
        this.forca = forca;
    }

    status(){
        console.log(`Nome:  ${this.nome}`);
        console.log(`Vida:  ${this.vida}%`);
        console.log(`Fome:  ${this.fome}%`);
        console.log(`Força: ${this.forca}%`);
        console.log(`Moedas: C$ ${this.moedas}`);
    }

    alimentar(fome, vida){
        this.fome += fome;
        this.vida += vida;
    }
}

module.exports = Heroi;