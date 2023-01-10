class Veiculo{
    constructor(marca, modelo, ano, tipo, combustivel, numOcupantes){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano,
        this.tipo = tipo,
        this.combustivel = combustivel;
        this.numOcupantes = numOcupantes;
    }

    apresentacao(){
        console.log(`${this.marca}, modelo: ${this.modelo} do ano de ${this.ano}`);
    }

    acelerar(){
        console.log("+50km/H");
    }
}

module.exports = Veiculo