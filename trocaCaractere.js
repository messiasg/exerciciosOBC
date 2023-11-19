// Solicitar o nome da nave espacial

const nomeNave = prompt(
  "Olá, seja bem-vindo a mais uma jornada espacial!\n\n" +
    "Para iniciarmos, por gentileza digite o nome da sua nave espacial:"
);

// Questionar o caractere que o usuário deseja substituir e o substituto
const caractereAntigo = prompt(
  "Digite qual o caractere que deseja substituir no nome da sua nave espacial:"
);
const caractereSubstituto = prompt("Digite por qual caractere você deseja substituir:");

// Para cada caractere igual ao informado, substituir pelo novo caractere
let novoNomeNave = "";

for (let i = 0; i < nomeNave.length; i++) {
  if (nomeNave[i] == caractereAntigo) {
    novoNomeNave += caractereSubstituto;
  } else {
    novoNomeNave += nomeNave[i];
  }
}

// Exibir um alerta com o novo nome da nave
alert("O novo nome da nave é " + novoNomeNave);
