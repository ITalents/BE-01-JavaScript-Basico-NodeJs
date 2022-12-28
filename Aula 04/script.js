window.onload = function() {
    document.getElementById("azul").addEventListener("mouseover", function(elemento) {
        document.getElementById("titulo").style.color = "blue";
        document.getElementById("azul").style.backgroundColor = "green";
    });

    document.getElementById("amarelo").addEventListener("mouseout", function() {
        document.getElementById("titulo").style.color = "yellow";
    });

    document.getElementById("vermelho").addEventListener("mouseup", function() {
        document.getElementById("titulo").style.color = "red";
    })
}