function calcular(){
    let ancho;
    let altura;
    let tipo;
    let resultado;

    tipo = document.getElementById("figura").value;
    switch(tipo){
        case "triangulo":
            altura = document.getElementById("altura").value;
            ancho = document.getElementById("ancho").value;

            resultado = (ancho * altura /2);
            document.getElementById("resultado").value = resultado;

        break;

        case "rectangulo":
            altura = document.getElementById("altura").value;
            ancho = document.getElementById("ancho").value;

            resultado = (ancho * altura);

            document.getElementById("resultado").value = resultado;
        break;

        case "cuadrado":
            altura = document.getElementById("altura").value;
            ancho = document.getElementById("ancho").value;

            resultado = (altura * altura);

            document.getElementById("resultado").value = resultado;
        break;
    }
}

function reset(){
    document.getElementById("altura").value = "";
    document.getElementById("ancho").value = "";
}
