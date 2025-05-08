let cotacao = document.querySelector("#cotacao");
let um = document.querySelector("#um");
let dois = document.querySelector("#dois");
let cinco = document.querySelector("#cinco");
let dez = document.querySelector("#dez");
let botao = document.querySelector("#botao");

function umPorcento(){
    let num1 = Number(cotacao.value);
    

    um.textContent = (num1*101)/100;
   
}
function doisPorcento(){
    let num1 = Number(cotacao.value);
    

    dois.textContent = (num1*102)/100;
   
}
function cincoPorcento(){
    let num1 = Number(cotacao.value);
    

    cinco.textContent = (num1*105)/100;
   
}
function dezPorcento(){
    let num1 = Number(cotacao.value);
    

    dez.textContent = (num1*110)/100;
   
}
 
    botao.onclick = function(){
        umPorcento();
        doisPorcento();
        cincoPorcento();
        dezPorcento();
    }
