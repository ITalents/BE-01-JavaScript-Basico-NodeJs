const prompt = require("prompt-sync")();
const Vilao = require("../personagens/vilao");

function luta(heroi){
    const boss = new Vilao(300,50);
    let rodada = 1;

    while(heroi.vida > 1 && boss.vida > 1){
        console.log(`rodada - ${rodada}`);
        console.log();
        const dadoVilao = d20();
        const dadoHeroi = d20();
        console.log(`Dado D20 do ${heroi.nome}: ${dadoHeroi}`);
        console.log(`Dado D20 do BOSS: ${dadoVilao}`);
        console.log();
        console.log(`Vida do ${heroi.nome}: ${heroi.vida}`);
        console.log(`Vida do BOSS: ${boss.vida}`);
        console.log();
        if(dadoHeroi >= dadoVilao){
            boss.defender(heroi.atacar());
        }else{
            heroi.defender(boss.atacar());
        }
        prompt("Aperte o ENTER para próxima rodada! ");
        console.log();
        rodada++;
    }

    if(heroi.vida > 1){
        return true;
    }else{
        return false;
    }
}

function d20(){
    let num  = Math.floor(Math.random() * 21);
    if(num == 0){
        num += 1;
    }
    return num;
}

module.exports = (heroi) => {
    console.log(`Parece que nem um segundo havia passado, mas ${heroi.nome} foi transportado para uma terra muito distante.`);
    console.log(`Olhando a sua volta ${heroi.nome} percebe estar em uma arena de batalha, algo muito parecido com o que ele lia em sua historia em quadrinhos.`);
    console.log();
    console.log(`Ele não estava sozinho ali, um pouco mais alto na arquibancada, milhares de pessoas gritavam e torciam para algo que ${heroi.nome} não sabia ainda o que era.`);
    console.log(`Um enorme portão de ferro se abriu e algo tão grande quanto saiu dele, veio em direção ao ${heroi.nome}.`);
    console.log(`${heroi.nome}, GRITOUUU o monstro, agora você não me escapa.`);
    console.log(`Espero por esse momento a anos, disse BOSS.`);
    console.log("Preparece, la vem a luta.");
    if(luta(heroi)){
        heroi.depositar(1000);
        heroi.restaurar();
        heroi.status();
        console.log("Jogo texto desenvolvido por - Prof Leonardo Orabona.");
        console.log("Espero que tenham gostado dessa aventura!!!");
    }else{
        console.log("GAME OVER");
    }
}