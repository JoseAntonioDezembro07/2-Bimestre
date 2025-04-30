let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");
let botaoSomar = document.querySelector("#botaoSomar");
let aritmetrica = document.querySelector("#aritmetrica");
let ponderada = document.querySelector("#ponderada");
let somaMedias = document.querySelector("#somaMedias");
let media = document.querySelector("#media");

function calcularMedias(){
 let num1 = Number(numero1.value);
 let num2 = Number(numero2.value);
 let num3 = Number(numero3.value);
 aritmetrica.textContent = (num1 + num2 + num3)/3;
 ponderada.textContent = (num1 * 3 + num2 * 2 +  num3*5)/10;
 somaMedias.textContent = aritmetrica + ponderada;
 media.textContent = (somaMedias / 2);                 
}
botaoSomar.onclick = function(){
    calcularMedias();
}