let numero = document.querySelector("#numero");
let somar = document.querySelector("#somar");
let resultado = document.querySelector("#resultado");

function impar(){
    let num1 = Number(numero.value);

    if(num1 % 2==0){
        resultado.textContent='numero par' + num1;
    }
    if(num1 % 2==1){
        resultado.textContent='numero impar' +num1;
    }
    
}
somar.onclick = function(){
    impar();
}