let frances = document.querySelector("#frances");
let broas = document.querySelector("#broas");
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");
let guardar = document.querySelector("#guardar");

function somar(){
    let num1 = Number(frances.value);
    let num2 = Number(broas.value);

    resultado.textContent = (num1 * 0.12)+(num2 * 1.50);
    
}
function poupar(){
    guardar.textContent = (resultado.textContent / 100);
}

calcular.onclick = function(){
    somar();
    poupar();
}