let valorkg = document.querySelector("#valorKg");
let quantidadekg = document.querySelector("#quantidadeKg");
let botaoSomar = document.querySelector("#botaoSomar");
let valorPago = document.querySelector("#valorPago");

function mutiplicarNumero(){

    let num1 = Number(valorkg.value);
    let num2 = Number(quantidadekg.value);

    valorPago.textContent = (num1 * num2);


}
botaoSomar.onclick = function(){
mutiplicarNumero();
}