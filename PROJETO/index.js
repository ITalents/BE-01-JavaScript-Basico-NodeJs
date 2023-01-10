const prompt = require("prompt-sync")();
const Heroi = require("./heroi");
const Vilao = require("./vilao1");

console.log("NOME DO JOGO");
console.log();
console.log("Bem vindo jogador, esse é o mais novo Jogo de Ação por texto!");
console.log("Precisamos construir seu personagem no qual irá se aventurar por nossos mundos.");
console.log();
console.log("A muitos anos em uma vila distante vivia nosso héroi.");
console.log("Em busca de aventura nosso heroi sai caminhando meio sem rumo em direção ao Vale das sombras.");
console.log();
const nome = prompt("Diga o melhor nome que venha a sua cabeça: ");

const heroi = new Heroi(80, nome, 80, 50);

console.log(`Seu personagem foi criado, agora sempre chamaremos ele de ${heroi.nome}`);
console.log();
heroi.status();
console.log();
console.log(`Aparentemente o ${heroi.nome} está caminhando a dias e parece um pouco cansado.`);
console.log();
if(prompt("deseja comer uma fruta? S - sim ou N - não ").toUpperCase() == "S"){
    console.log(`hmmm que fruta deliciosa disse ${heroi.nome}, vou querer mais algumas`);
    heroi.alimentar(5,2);
    heroi.status();
}else if(prompt("Então deseja comer carne de caça? S - sim ou N - não ").toUpperCase() == "S"){
    console.log(`hmmm essa carne estava ótima disse ${heroi.nome}`);
    heroi.alimentar(10,5);
    heroi.status();
}else{
    console.log("SEU PERSONAGEM NÃO RESTAUROU FOME OU VIDA!");
}