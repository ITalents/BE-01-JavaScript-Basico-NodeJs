window.onload = function(){
    document.getElementById("num2").addEventListener("focusout", function(){
        num1 = document.getElementById("num1").value;
        num2 = document.getElementById("num2").value;

        document.getElementById("result1").value = parseInt(num1) + parseInt(num2);
    })

    document.getElementById("num4").addEventListener("focusout", function(){
        num1 = document.getElementById("num3").value;
        num2 = document.getElementById("num4").value;

        document.getElementById("result2").value = parseInt(num1) - parseInt(num2);
    })

    document.getElementById("num6").addEventListener("focusout", function(){
        num1 = document.getElementById("num5").value;
        num2 = document.getElementById("num6").value;

        document.getElementById("result3").value = parseInt(num1) * parseInt(num2);
    })

    document.getElementById("num8").addEventListener("focusout", function(){
        num1 = document.getElementById("num7").value;
        num2 = document.getElementById("num8").value;

        document.getElementById("result4").value = parseInt(num1) / parseInt(num2);
    })



    elemento = document.getElementById("num1");
    elemento.addEventListener("click", function(){
        elemento.value = "";
    })
}