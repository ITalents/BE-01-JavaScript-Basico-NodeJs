const Carro = require('./carro');
const Moto = require('./moto');

const carro = new Carro("VW","Fusca", 1993, "compacto", "gasolina", 5, 2);

const moto = new Moto("BMW","GS1200",2010, "Rally", "gasolina", 2, 1200);

console.log(carro);
console.log(carro.apresentacao());
console.log(carro.acelerar());

console.log(moto);
console.log(moto.apresentacao());
console.log(moto.acelerar());