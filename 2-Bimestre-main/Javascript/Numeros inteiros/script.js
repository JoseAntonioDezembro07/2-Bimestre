let numero1  = document.querySelector("#numero1")
let numero2  = document.querySelector("#numero2")
let botao  = document.querySelector("#botao")
let soma  = document.querySelector("#soma")
let subtracao  = document.querySelector("#subtracao")
let multiplicacao  = document.querySelector("#multiplicacao")
let divisao = document.querySelector("#divisao")

function somas(){
    num1 = Number(numero1.value);
    num2 = Number(numero2.value);

    soma.textContent = (num1+num2);
    subtracao.textContent =(num1-num2);
    multiplicacao.textContent= (num1*num2) ;
    divisao.textContent = (num1/num2);
}
botao.onclick = function(){
    somas();
}




