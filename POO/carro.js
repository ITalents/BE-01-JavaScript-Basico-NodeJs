class Carro {
    constructor(marca, modelo, ano, tipo, combustivel){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano,
        this.tipo = tipo,
        this.combustivel = combustivel;
    }

    apresentacao(){
        console.log(`${this.marca}, modelo: ${this.modelo} do ano de ${this.ano}`);
    }
}

module.exports = Carro;