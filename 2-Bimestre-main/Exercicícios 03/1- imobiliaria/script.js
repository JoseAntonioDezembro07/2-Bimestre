let largura = document.querySelector("#largura");
let comprimento = document.querySelector("#comprimento");
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

function calcularArea(){
    let num1 = Number(largura.value);
    let num2 = Number(comprimento.value);

    resultado.textContent = (num1 * num2);

}

calcular.onclick = function(){
    calcularArea();

}