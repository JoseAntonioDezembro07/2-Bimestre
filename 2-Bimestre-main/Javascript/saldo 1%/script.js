 let saldo = document.querySelector("#saldo");
 let botaoSomar = document.querySelector("#botaoSomar");
 let reajuste = document.querySelector("#reajuste");

 function imprimirSaldo(){

    let num1 = Number(saldo.value);

    reajuste.textContent = (num1 * 1) / 100 + num1;
    
 }
 botaoSomar.onclick = function(){
    imprimirSaldo();
 }