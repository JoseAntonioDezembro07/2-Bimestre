function calcularSalario() {
  const salarioInput = document.getElementById("salario");
  const salarioInicial = parseFloat(salarioInput.value);

  if (isNaN(salarioInicial) || salarioInicial <= 0) {
    alert("Por favor, insira um valor de salário válido.");
    return;
  }

  const salarioComAumento = salarioInicial * 1.15;
  const salarioFinal = salarioComAumento * 0.92; 


  document.getElementById("inicial").textContent = `Salário inicial: R$ ${salarioInicial.toFixed(2)}`;
  document.getElementById("aumento").textContent = `Salário com aumento de 15%: R$ ${salarioComAumento.toFixed(2)}`;
  document.getElementById("final").textContent = `Salário final após 8% de imposto: R$ ${salarioFinal.toFixed(2)}`;
}
