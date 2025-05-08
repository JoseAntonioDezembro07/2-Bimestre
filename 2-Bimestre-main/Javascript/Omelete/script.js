let valor = document.querySelector("#valor");
let resultado = document.querySelector("#resultado");
let botao = document.querySelector("#botao");
let resultadoQueijo = document.querySelector("#resultadoQueijo")

function ovo(){
    let num1 = Number(valor.value);

    resultado.textContent = (num1 * 2);
    
}
function queijo(){
    let num1 = Number(valor.value);

    resultadoQueijo.textContent = (num1 * 50);

}
botao.onclick = function(){
    ovo();
    queijo();
}