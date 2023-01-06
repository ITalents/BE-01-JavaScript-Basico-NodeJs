async function espera() {
    const promise = new Promise(resolve => {
        setTimeout(() => resolve(console.log("Olá demorei 3 segundos")),3000);
    });
    const esperando = await promise;
    console.log("não demorei nada");
}

espera();