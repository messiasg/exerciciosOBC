// Inicio funções calculos

function conversaoAnosLuzparaPC() {
  const anosLuz = parseFloat(prompt("Digite o valor de anos luz que deseja converter:"));
  return alert(
    "Distancia em anos luz: " +
      anosLuz +
      "\n\nValor convertido para PC: " +
      anosLuz * 0.306601393806528
  );
}

function conversaoAnosLuzparaAU() {
  const anosLuz = parseFloat(prompt("Digite o valor de anos luz que deseja converter:"));
  return alert(
    "Distancia em anos luz: " +
      anosLuz +
      "\n\nValor convertido para AU: " +
      anosLuz * 1.496 * Math.pow(10, 11)
  );
}

function conversaoAnosLuzparaKM() {
  const anosLuz = parseFloat(prompt("Digite o valor de anos luz que deseja converter:"));
  return alert(
    "Distancia em anos luz: " +
      anosLuz +
      "\n\nValor convertido para KM: " +
      anosLuz * 9.461 * Math.pow(10, 15)
  );
}

// Fim funções calculos

// Inicio função menu interativo

function menuInterativo() {
  return prompt(
    "Olá, seja bem-vindo a conversão de anos luz para outras unidades, qual das seguintes opções você deseja converter:" +
      "\n1.parsec(pc)" +
      "\n2.unidade astrononima(AU)" +
      "\n3.Quilometros(Km)" +
      "\n4.Sair"
  );
}
// Fim função menu interativo

// Inicio função execução do programa

function execucaoPrograma() {
  let opcao = "";
  do {
    opcao = menuInterativo();
    switch (opcao) {
      case "1":
        conversaoAnosLuzparaPC();
        break;

      case "2":
        conversaoAnosLuzparaAU();
        break;

      case "3":
        conversaoAnosLuzparaKM();
        break;

      case "4":
        alert("Programa encerrando");
        break;

      default:
        alert(
          "Distancia em anos luz: " + anosLuz + "Unidade não identificada: Conversão fora do escopo"
        );
        break;
    }
  } while (opcao !== "4");
}

// Fim execucao programa

execucaoPrograma();
