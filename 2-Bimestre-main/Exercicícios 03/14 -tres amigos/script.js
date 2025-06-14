function dividirConta() {
  const input = document.getElementById("total");
  const valorTotal = parseFloat(input.value);

  if (isNaN(valorTotal) || valorTotal <= 0) {
    alert("Por favor, insira um valor válido para a conta.");
    return;
  }

  // Carlos e André pagam valores inteiros
  const valorInteiro = Math.floor(valorTotal / 3);
  const totalCarlosAndre = valorInteiro * 2; // Carlos + André

  // Felipe paga a diferença
  const valorFelipe = valorTotal - totalCarlosAndre;

  // Exibindo os valores para cada um
  document.getElementById("carlos").textContent = `Carlos deve pagar: R$ ${valorInteiro.toFixed(2)}`;
  document.getElementById("andre").textContent = `André deve pagar: R$ ${valorInteiro.toFixed(2)}`;
  document.getElementById("felipe").textContent = `Felipe deve pagar: R$ ${valorFelipe.toFixed(2)}`;
}
