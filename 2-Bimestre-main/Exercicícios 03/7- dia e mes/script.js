let mes = document.querySelector("#mes");
let dia = document.querySelector("#dia");
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");



function calcularDias() {
  let num1 = Number(mes.value);
  let num2 = Number(dia.value);

resultado.textContent = (num1 - 1)* 30 +num2;
  }
  calcular.onclick = function(){
    calcularDias();
  }