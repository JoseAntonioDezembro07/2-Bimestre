let nome  = document.querySelector("#name");
let id = document.querySelector("#id");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function dias(){
    let num1 = String(nome.value);
    let num2 = Number(id.value);
    
    resultado.textContent = "Seu nome " +num1+ " voce tem "
    +num2+" e ja viveu "+num2*365+" dias"

}
botao.onclick = function(){
    dias();
}
