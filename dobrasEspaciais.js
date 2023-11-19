// Solicitar o nome da nave espacial

const nomeNave = prompt(
  "Olá, seja bem-vindo a mais uma jornada espacial\n\n" +
    "Para iniciarmos, por gentileza digite o nome da sua nave espacial:"
);

// Contabilizador de dobras
let quantidadeDeDobras = 0;

// Questionamento se deseja realizar dobra espacial

let questionarDobra = prompt("Deseja entrar em dobra espacial?\n\n" + "1-Sim\n" + "2-Não");

// Se a resposta for sim, contabilizar essa dobra e questionar novamente até termos uma resposta negativa
while (questionarDobra === "1") {
  quantidadeDeDobras++;
  questionarDobra = prompt("Deseja realizar a próxima dobra?\n\n" + "1-Sim\n" + "2-Não");
}

// Resultado final
alert("A nave espacial " + nomeNave + " realizou a quantidade de " + quantidadeDeDobras + " dobras espaciais.")
