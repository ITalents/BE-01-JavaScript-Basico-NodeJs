const Veiculo = require("./veiculo");

class Carro extends Veiculo{
    constructor(marca, modelo, ano, tipo, combustivel, numOcupantes, numPortas){
        super(marca, modelo, ano, tipo, combustivel, numOcupantes);
        this.numPortas = numPortas;
    }

    acelerar(){
        console.log("+5km/H");
    }
}

module.exports = Carro;