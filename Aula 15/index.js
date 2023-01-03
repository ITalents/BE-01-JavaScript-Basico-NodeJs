var listaPessoas = [];

function criaPessoa(nome, idade, sexo){
    let pessoa = new Object();

    pessoa["nome"] = nome;
    pessoa["idade"] = idade;
    pessoa["sexo"] = sexo;

    listaPessoas.push(pessoa);
}

criaPessoa("leo",12,"M");
criaPessoa("lucas",29,"M");
criaPessoa("joao",18,"M");
criaPessoa("bruno",32,"M");

console.log(listaPessoas);