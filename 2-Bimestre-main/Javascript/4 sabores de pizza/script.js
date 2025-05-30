let primeiroSabor = document.querySelector("#primeiroSabor");
let segundoSabor = document.querySelector("#segundoSabor");
let terceiroSabor = document.querySelector("#terceiroSabor");
let quartoSabor = document.querySelector("#quartoSabor");
let refri = document.querySelector("#refri");
let botao = document.querySelector("#botao");
let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let  sabor3 = document.querySelector("#sabor3");
let  sabor4 = document.querySelector("#sabor4");
let pagar = document.querySelector("#pagar");
let sabores = document.querySelector("#sabores");

function pizza(){
    let text1 = primeiroSabor.value;
    sabor1.textContent =(text1);
   

    let text2 = segundoSabor.value;
    sabor2.textContent=(text2);

    let text3 = terceiroSabor.value;
    sabor3.textContent=(text3);

    let text4 = quartoSabor.value;
    sabor4.textContent=(text4);
    
    let totalrefrigerantes = Number(refri.value);
    let quantidadesabor = Number(sabores.value);

    pagar.textContent = (quantidadesabor *12)+(totalrefrigerantes*7);
   

}
function somar(){
    let text1 = Number(primeiroSabor.value);
    pagar.textContent = (12+num1);
}

botao.onclick = function(){
    pizza();
    pagamento();
}