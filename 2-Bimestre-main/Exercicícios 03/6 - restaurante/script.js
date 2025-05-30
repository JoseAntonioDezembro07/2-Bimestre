let quilos = document.querySelector("#quilos");
let resultado = document.querySelector("#resultado");
let botao = document.querySelector("#botao");

function valor(){
    let num1 = Number(quilos.value);
    resultado.textContent = (num1 * 12);
}

botao.onclick = function(){
    valor();
}