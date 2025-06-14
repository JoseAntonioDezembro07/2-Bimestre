let botao = document.querySelector("#botao");
function converterTempo() {
  const diasTotais = parseInt(document.getElementById('diasInput').value);

  if (isNaN(diasTotais) || diasTotais < 0) {
    document.getElementById('resultado').innerText = "Por favor, insira um número válido de dias.";
    return;
  }

  const anos = Math.floor(diasTotais / 360);
  const restoDias = diasTotais % 360;
  const meses = Math.floor(restoDias / 30);
  const dias = restoDias % 30;

  document.getElementById('resultado').innerText =
    `${diasTotais} dias equivalem a ${anos} ano(s), ${meses} mês(es) e ${dias} dia(s).`;
}
botao.onclick = function(){
  converterTempo()
}
