let pequena = document.querySelector("#pequena");
let media = document.querySelector("#media");
let grande = document.querySelector("#grande");
let resultado = document.querySelector("#resultado");
let calcular = document.querySelector("#calcular");

function somarCamisa(){
    let num1 = Number(pequena.value);
    let num2 = Number(media.value);
    let num3 = Number(grande.value);
    let total = (num1 * 10) + (num2 * 15) + (num3 * 20) ;
    resultado.textContent = total;

}
calcular.onclick = function(){
    somarCamisa();
}