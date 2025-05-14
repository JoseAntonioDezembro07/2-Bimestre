let  numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let somar = document.querySelector("#somar");
let maior = document.querySelector("#maior");


function maiores(){

    let num1 = Number (numero1.value);
    let num2 = Number (numero2.value);

if(num1 == num2){
    maior.textContent ='por favor, insira dois numeros validos';
   return; 
} if (num1> num2){
    maior.textContent='o maior numero ' +num1;
} else{
    maior.textContent='o maior numero' +num2;
}

}
somar.onclick = function (){
    maiores();
}