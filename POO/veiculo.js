class Veiculo{
    velocidade = 0;

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

    validar(){
        if(!this.marca){
            throw new Error("Ops, voce esqueceu de preencher a marca");
        }else if(typeof(this.marca) != "string"){
            throw new Error("O tipo da marca deve ser String");
        }
        if(!this.modelo){
            console.error("Ops, voce esqueceu de preencher o modelo");
        }
        if(!this.ano){
            console.log("Ops, voce esqueceu de preencher o ano");
        }
    }

    padronizar(){
        this.marca = this.marca.toString().toUpperCase();
        this.modelo = this.modelo.toString().toUpperCase();
        this.tipo = this.tipo.toString().toLowerCase();
    }

    acelerar(velo){
        this.velocidade += velo;
        console.log(`Velocidade atual: ${this.velocidade}`);
    }
    desacelerar(velo){
        this.velocidade -= velo;
        console.log(`Velocidade atual: ${this.velocidade}`);
    }
}

module.exports = Veiculo