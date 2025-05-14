function mostrarEtapa(etapa) {
  const etapas = [
    "Crie uma persona: quem será beneficiado pelo projeto?",
    "Liste os motivadores: o que desperta o interesse nesse projeto?",
    "Identifique os problemas que precisam ser resolvidos.",
    "Quais as etapas necessárias para realizar esse projeto?",
    "Qual é a visão do futuro após o projeto funcionar?",
    "Descreva a solução e o impacto: o que mudará e como será medido?"
  ];

  document.getElementById("output").innerText = etapas[etapa - 1];
}

function enviarPergunta() {
  const pergunta = document.getElementById("pergunta").value;
  const output = document.getElementById("output");

  if (pergunta.trim() === "") {
    output.innerText = "Por favor, escreva algo antes de perguntar.";
    return;
  }

  // Simulação de resposta da IA
  output.innerText = `🔍 Analisando sua ideia: "${pergunta}"...\n💡 Sugestão da IA: Considere envolver a comunidade e medir impacto com indicadores sociais.`;
}
