window.onload = function(){

    const imagens = document.getElementsByClassName("produtosImgs");
    const total = document.getElementById("total");

    const sMais = document.getElementsByClassName("sMais");

    for(let i = 0; i < imagens.length; i++){
        imagens[i].addEventListener("click", function(){
            document.getElementById("imgAmpliada").src =  imagens[i].src;
            total.style.display = "block";
        }) 
    }

    total.addEventListener("click", function(){
        total.style.display = "none";
    })

    for(let i = 0; i < sMais.length; i++){
        sMais[i].addEventListener("mouseover", function(){
            sMais[i].style.fontSize = "120%";
        })

        sMais[i].addEventListener("mouseout", function(){
            sMais[i].style.fontSize = "initial";
        })
    }
}