const Veiculo = require("./veiculo");

class Moto extends Veiculo{
    constructor(marca, modelo, ano, tipo, combustivel, numOcupantes, cilindrada){
        super(marca, modelo, ano, tipo, combustivel, numOcupantes);
        this.cilindrada = cilindrada
    }

    acelerar(){
        console.log("+10km/H");
    }

    apresentacao(){
        console.log(`${this.marca}, modelo: ${this.modelo} do ano de ${this.ano} e ${this.cilindrada} cilindradas`);
    }
}

module.exports = Moto;