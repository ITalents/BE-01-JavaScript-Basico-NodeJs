for (let i = 0; i < 1000; i+=2) {
    console.log(i);
}

let teste = true;
let numero = 0;

while(teste){
    if(100 <= numero){
        teste = false;
    }
    console.log(numero);
    numero++;
}

teste = true;

do{
    if(numero <= 1){
        teste = false;
    }
    console.log(numero);
    numero--;
}while(teste)