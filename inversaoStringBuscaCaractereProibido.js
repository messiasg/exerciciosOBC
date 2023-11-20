// Solicitar o nome da nave espacial

const nomeNave = prompt(
  "Olá, seja bem-vindo a mais uma jornada espacial!\n\n" +
    "Para iniciarmos, por gentileza digite o nome da sua nave espacial:"
);

let nomeInvertido = "";

// Estrutura de repetição para inverter o nome da nave. Durante a inversão, procurar pelo caractere proibido. Caso encontre, a inversão deve ser parada onde estiver
for (let i = nomeNave.length - 1; i >= 0; i--) {
  if (nomeNave[i] == "e") {
    break;
  }
  nomeInvertido += nomeNave[i];
}

// O nome invertido deve ser impresso
alert(
  "Nome original nave espacial:" + nomeNave + "\nNome invertido nave espacial:" + nomeInvertido
);
