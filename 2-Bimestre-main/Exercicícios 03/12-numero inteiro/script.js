function separarDigitos() {
  const input = document.getElementById("numero");
  let numero = parseInt(input.value);

  if (isNaN(numero) || numero < 0 || numero > 999) {
    alert("Digite um número inteiro válido entre 0 e 999.");
    return;
  }

  const centena = Math.floor(numero / 100);
  const dezena = Math.floor((numero % 100) / 10);
  const unidade = numero % 10;

  const resultado = `CENTENA = ${centena} | DEZENA = ${dezena} | UNIDADE = ${unidade}`;
  document.getElementById("saida").textContent = resultado;
}
