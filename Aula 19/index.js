const prompt = require("prompt-sync")();

let notas = [];

function capturaNotas(){
    const numNotas = +prompt("Quantas notas deseja digitar? ");
    for (let i = 0; i < numNotas; i++) {
        notas.push(+prompt(`${i+1} - Digite a nota: `)); 
    }
    
    let media = 0;
    notas.forEach((value) => {
        media += value;
    })
    media =  media / notas.length;

    return media;
}

console.log(capturaNotas());