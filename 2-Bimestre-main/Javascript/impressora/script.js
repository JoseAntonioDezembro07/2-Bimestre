let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");
let botaoSomar = document.querySelector("#botaoSomar");
let aritmetrica = document.querySelector("#aritmetrica");
let ponderada = document.querySelector("#ponderada");
let somaMedias = document.querySelector("#somaMedias");
let media = document.querySelector("#media");

function calcularAri(){
 let num1 = Number(numero1.value);
 let num2 = Number(numero2.value);
 let num3 = Number(numero3.value);
 let resultadoa =(num1 + num2 + num3 )/3;

 aritmetrica.textContent = resultadoa;
 return resultadoa;
            
}
function calcularPon(){
let num1 = Number(numero1.value);
 let num2 = Number(numero2.value);
 let num3 = Number(numero3.value);
let resultadob = (num1 * 2) + (num2 * 3) +  (num3*5);
    ponderada.textContent = resultadob;
    return resultadob;
}
function calcularSoma(){
       let resultadoc = ( calcularAri()+calcularPon()+2);
       somaMedias.textContent = resultadoc;
       return resultadoc;
    
}
function calcularMedia(){
   let resultadod = (calcularSoma() / 2)
    media.textContent = resultadod;     
    return media
}
botaoSomar.onclick = function(){
    calcularAri();
    calcularPon();
    calcularSoma();
    calcularMedia()
}