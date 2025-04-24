let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let botaoSomar = document.querySelector("#botaoSomar");
let h3resultado = document.querySelector("#h3resultado");

function trocoNumero(){

    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);

    h3resultado.textContent = (num1 + num2);


}

botaoSomar.onclick = function(){
    Numero();
}
