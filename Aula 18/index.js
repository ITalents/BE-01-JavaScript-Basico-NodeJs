const prompt = require("prompt-sync")();

const nome = prompt("Qual o seu nome? ");
const idade = prompt("Qual a sua idade? ")
const sexo = prompt("Preencha seu sexo: M ou F ");

console.log(`Seu nome é: ${nome}, você tem ${idade} anos e seu sexo é ${sexo}`);
