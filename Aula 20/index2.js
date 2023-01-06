function contar(valor){
    let temp = 0;
    for (let i = 0; i < valor; i++) {
        temp += i;      
    }
    return temp;
}

async function teste(){
    let res = await contar(11111111111);
    console.log("nao demorei nada");
    console.log(res);
}

teste();