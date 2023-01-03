var nome = "Leonardo";
var idade = 15;
var sexo = "M";
var altura = 1.72;
var peso = 73.2;

var nomes = ["Leonardo","Lucas","João"];
var idade = []
var sexo = []

console.log(nomes);

console.log(nomes.indexOf("João"));

// console.log(nomes.pop());
// console.log(nomes);

// console.log(nomes.splice(1,1));
// console.log(nomes);

nomes.forEach((value, index) => {
    console.log(index+" "+value);
});

console.log(nomes.length);

console.log(nomes.filter((value) => value.length > 6));