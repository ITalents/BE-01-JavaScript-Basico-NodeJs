const prompt = require("prompt-sync")();

function randomico(){
    const num = Math.floor(Math.random() * 100);
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

module.exports = (heroi) => {
    console.log(`A floresta nesse ponto ficou menos fechada, logo a frente ${heroi.nome} avistou um grande espaço aberto.`);
    console.log(`Uma enorme clareira em meio a mata, algumas frutas, pedras, e arbustos baixos compunham a paisagem.`);
    if(prompt("Dejesa coletar e comer algumas dessas frutas? S - sim ou N - não ").toUpperCase() == "S"){
        heroi.alimentar(20,20);
        heroi.status();
        console.log();
        console.log(`Frutas deliciosas disse ${heroi.nome}, comeria mais um pouco talvez.`);
    }else{
        console.log();
        console.log(`hmmm, ja estou cheio disse ${heroi.nome}, não quero mais frutas.`);
    }
    console.log();
    console.log(`Algo chamou a atenção do ${heroi.nome}, em meio as pedras alguma coisa se destacava.`);
    console.log(`${heroi.nome} se aproximou e percebeu ser uma bolsa um pouco diferente.`);
    if(prompt("Dejesa abrir a bolsa e verificar seu conteudo? S - sim ou N - não ").toUpperCase() == "S"){
        if(randomico()){
            heroi.restaurarVida(50);
            heroi.depositar(50);
            console.log();
            console.log(`Obaaaa achei uma poção e 50 moedas, hoje é meu dia de sorte.`);
        }else{
            heroi.defender(50);
            console.log();
            console.log(`AIIIII essa doeu, não imaginaria que tivesse uma cobra ai dentro.`);
        }
    }
    heroi.status();

    console.log();
    console.log(`Logo após um brilho surge no centro da clareira, um portal se abre.`);
    console.log(`${heroi.nome}, se aproxima e entra no portal, levando para outra dimensão.`);
    console.log();
}