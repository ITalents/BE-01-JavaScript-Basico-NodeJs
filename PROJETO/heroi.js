const Personagem = require("./personagem");

class Heroi extends Personagem{
    moedas = 0;

    constructor(vida, nome, fome, forca){
        super(vida);
        this.nome = nome;
        this.fome = fome;
        this.forca = forca;
    }
}

module.exports = Heroi;