function calcularAreaPizza() {
  const input = document.getElementById("raio");
  const raio = parseFloat(input.value);

  if (isNaN(raio) || raio <= 0) {
    alert("Por favor, insira um valor de raio válido (maior que zero).");
    return;
  }

  const pi = 3.14;
  const area = pi * raio * raio;

  document.getElementById("resultado").textContent = 
    `A área da pizza com raio ${raio} cm é: ${area.toFixed(2)} cm².`;
}
