let pontoX = document.querySelector("#pontoX1");
let pontoY = document.querySelector("#pontoY1");
let segundoX = document.querySelector("#segundoX");
let segundoY= document.querySelector("#segundoY");
let resultado = document.querySelector("#resultado");
let calcular = document.querySelector("#calcular");

function distancia(){
  let num1 =  Number(pontoX.value);
  let num2 = Number(pontoY.value);
    let num3 = Number(segundoX.value);
    let num4 = Number(segundoY.value);

    let primeiroX = (num3 - num1);
    let resultadoX = (primeiroX * primeiroX);
    let primeiroY = (num4 - num2);
    let resultadoY = (primeiroY * primeiroY);
    resultado.textContent = (resultadoX + resultadoY);
}
calcular.onclick = function () {
    distancia();
}