const prompt = require("prompt-sync")();
const Vilao = require("../personagens/vilao");

function lutar(heroi){
    console.log(`Preparados ou não le vem porrada.`);
    const vilao = new Vilao(200,50);

    while(heroi.vida > 1 && vilao.vida > 1){
        vilao.defender(heroi.atacar());
        heroi.defender(vilao.atacar());
        console.log(`Vida do ${heroi.nome}: ${heroi.vida}`);
        console.log(`Vida do Troll: ${vilao.vida}`);
        console.log();
    }
    if(heroi.vida < 1){
        console.log("vilao venceu");
        return false;
    }else{
        console.log("heroi venceu");
        return true;
    }
}

module.exports = (heroi) => {
    let luta = false;

    console.log(`Algumas horas depois, andando em meio a floresta, ${heroi.nome} percebeu que não estava sozinho ali.`);
    console.log(`Um pouco mais a frente existia uma figura grande em meio as arvores.`);
    console.log();
    console.log(`Um troll enorme pulou na frente de ${heroi.nome} e o assustou.`);

    if(prompt("Aparentemente ele quer briga, deseja lutar? S - sim ou N - não ").toUpperCase() == "S"){
        console.log(`Se prepare ai vem o primeiro golpe.`);
        luta = lutar(heroi);
    }else{
        console.log(`Esta na hora de meter o pé, ${heroi.nome}, tenta se esconder em meio ao mato proximo e fugir da luta.`);
        console.log(`O troll escuta muito bem e o achou, nao tem mais saida`);
        luta = lutar(heroi);
    }

    if(luta){
        heroi.restaurar();
        heroi.depositar(50);
        console.log(`PARABENS ${heroi.nome}, voce conseguiu vencer o Troll da Floresta, receba seus premios!!!`);
        heroi.status();
        return true;
    }else{
        return false;
    }
}