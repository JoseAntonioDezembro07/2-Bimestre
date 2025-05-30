let dinheiro = document.querySelector("#dinheiro");
let preço = document.querySelector("#preço");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function gasolina(){
    let num1 = Number(dinheiro.value);
    let num2 = Number(preço.value);
    
 resultado.textContent = (num1 /num2);
}
botao.onclick = function(){
    gasolina();
}