const prompt = require("prompt-sync")();
const Heroi = require("./personagens/heroi");

const fase1 = require("./fases/fase1");

//APRESENTACAO DO JOGO
console.log("MAKE YOUR WAY - TEXT GAME");
console.log();
console.log("Bem vindo jogador, esse é o mais novo Jogo de Ação por texto!");
console.log("Precisamos construir seu personagem no qual irá se aventurar por nossos mundos.");
console.log();
console.log("A muitos anos em uma vila distante vivia nosso héroi.");
console.log("Em busca de aventura nosso heroi sai caminhando meio sem rumo em direção ao Vale das sombras.");
console.log();

//CRIACAO DO PERSONAGEM (HEROI)
const nome = prompt("Diga o melhor nome que venha a sua cabeça: ");
const heroi = new Heroi(80, nome, 80, 50);
console.log(`Seu personagem foi criado, agora sempre chamaremos ele de ${heroi.nome}`);
console.log();
heroi.status();
console.log();

//ENSINA A SE ALIMENTAR
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
console.log();

//ENSINA A MELHORAR O CONDICIONAMENTO FISICO (FORCA)
console.log(`Ao longe ${heroi.nome} avistou um grande lago e foi se aproximando.`);
console.log(`Dentro do lago existe alguma coisa brilhando.`);
console.log();
if(prompt("deseja nadar até o ponto brilhante? S - sim ou N - não ").toUpperCase() == "S"){
    heroi.treinar(10);
    console.log(`Era mais interessante de longe, ao pegar o objeto brilhante, ${heroi.nome} percebeu que se travada de um anel de latinha de refrigerante.`);
    console.log(`Logo após, ${heroi.nome} retornou a margem do lago, se secou e seguiu caminho.`);
    heroi.status();
}else{
    console.log(`Ufaaa, disse ${heroi.nome}, a agua estava bastante fria!!!`);
}
console.log();
console.log(`Algum tempo se passou e no meio do caminho havia uma arvore bem alta.`);
console.log(`No topo dessa arvore existia uma sacola amarrada.`);
console.log();
if(prompt("deseja subir na arvore para pegar a sacola? S - sim ou N - não ").toUpperCase() == "S"){
    console.log(`Puxa mas que sorte, dentro da sacola haviam 5 moedas escondidas.`);
    heroi.depositar(5);
    heroi.treinar(15);
    heroi.status();
}else{
    console.log(`Nossa que preguiça, nao vou subir essa arvore, deixa para uma próxima.`);
    console.log("SEM ATIVIDADES FISICAS SEU PERSONAGEM PERDE PONTOS DE FORÇA");
}

//FIM DA FASE INTRODUTORIA
console.log();
const fase1 = fase1(heroi);

if(fase1){
    //fase2
}else{
    console.log("GAME OVER");
}