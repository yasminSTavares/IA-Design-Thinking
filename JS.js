const etapas = [
  "Crie uma persona representando o seu público-alvo.",
  "Liste os motivadores: o que despertou o interesse pelo projeto?",
  "Quais são os problemas que precisam ser resolvidos?",
  "Descreva as etapas necessárias para realizar o projeto.",
  "O que mudará quando o projeto estiver funcionando? Qual será a visão futura?",
  "Qual é a solução proposta? Quais impactos terá e como serão medidos?"
];

function mostrarEtapa(numero) {
  const output = document.getElementById("output");
  output.textContent = etapas[numero - 1];
}

function enviarPergunta() {
  const pergunta = document.getElementById("pergunta").value;
  const output = document.getElementById("output");
  if (!pergunta.trim()) {
    output.textContent = "Por favor, descreva sua ideia para que a IA possa ajudar.";
    return;
  }

  // Simulação de IA (placeholder)
  output.textContent = "Pensando... (resposta simulada da IA)";
  
  setTimeout(() => {
    output.textContent = `Ideia analisada: ${pergunta}\n\nSugestão de desenvolvimento: ... (IA responderia aqui)`;
  }, 1000);
}
