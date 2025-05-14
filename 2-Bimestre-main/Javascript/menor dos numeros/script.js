let numero1 = document.querySelector("#numero1")
let numero2 = document.querySelector("#numero2")
let numero3 = document.querySelector("#numero3")
let numero4 = document.querySelector("#numero4")
let somar = document.querySelector("#somar")
let resultado = document.querySelector("#resultado")

function menor(){
    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);
    let num3 = Number(numero3.value);
    let num4 = Number(numero4.value);

    if(num1 == num2 == num3 == num4){
        resultado.textContent='coloque numeros validos';

    }
    if(num1 < num2 && num1<num3 && num1<num4){
        resultado.textContent='o menor numero e o'+ num1;
    }
    if(num2< num1 && num2<num3 && num2<num4){
        resultado.textContent="o menor numero e o"+ num2;
    }
    if(num3< num1 && num3<num2 && num3<num4){
        resultado.textContent="o menor numero e o"+ num3;
    }
        if(num4< num1 && num4<num2 && num4<num3){
            resultado.textContent="o menor numero e o"+ num4;
        }
}
somar.onclick = function(){
    menor();
}
