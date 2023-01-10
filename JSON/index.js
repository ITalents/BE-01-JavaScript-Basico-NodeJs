const json = '{"nome":"Leo", "idade": 25}';

console.log(json);

const obj = JSON.parse(json);

console.log(obj);
console.log(obj.nome);
console.log(obj.idade);

obj.nome = "Leonardo";

console.log(obj);

const newJson = JSON.stringify(obj);

console.log(newJson);