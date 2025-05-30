let cavalos = document.querySelector("#cavalos");
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

function ferraduras(){
    let num1 = Number(cavalos.value);

    resultado.textContent =(num1 * 4);
}

calcular.onclick = function(){
    ferraduras();
}