class Personagem {

    constructor(vida){
        this.vida = vida
    }

    atacar(){
        console.log("ataque");
    }
    defender(){
        console.log("defender");
    }
}

module.exports = Personagem;