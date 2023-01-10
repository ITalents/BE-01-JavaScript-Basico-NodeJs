const Carro = require('./carro');
const Moto = require('./moto');

const carro = new Carro("vw","Fusca", 1993, "CompActo", "gasolina", 5, 2);

const moto = new Moto("","GS1200",2010, "Rally", "gasolina", 2, 1200);

carro.validar();
carro.padronizar();
console.log(carro);
carro.acelerar(10);
carro.desacelerar(5);
console.log(carro);

moto.validar();