// Menu interativo caso o usuário deseja acelerar ou parar a velocidade da nave espacial
function menuInterativo() {
  return prompt(
    "\nSelecione a opção abaixo para o que você deseja realizar:" +
      "\n\n1.Acelerar a nave" +
      "\n2.Parar" +
      "\n3.Sair do programa"
  );
}

function executarPrograma() {
  // O programa deve iniciar solicitando o nome, tipo e velocidade máxima da nave e com a velocidade inicialmente em 0

  // Objeto nave com métodos
  let naveEspacial = {
    nomeDaNave: function () {
      return prompt(
        "Olá seja bem-vindo a mais um programa espacial! Para iniciarmos digite o nome da sua nave espacial:"
      );
    },
    tipoDaNave: function () {
      return prompt("Digite o tipo da nave:");
    },
    velocidadeMaxima: function () {
      return parseFloat(prompt("Digite a velocidade máxima da nave:"));
    },

    acelerarNave: function () {
      return parseFloat(prompt("Informe quanto deseja acelerar a sua nave:"));
    },

    pararNave: function () {
      return alert(
        "Nome nave: " + nome + "\nTipo nave: " + tipo + "\nVelocidade atual nave: " + velocidade
      );
    },
  };

  let nome = naveEspacial.nomeDaNave();
  let tipo = naveEspacial.tipoDaNave();
  let maximo = naveEspacial.velocidadeMaxima();
  let velocidade = 0;
  let opcao = "";

  do {
    opcao = menuInterativo();

    switch (opcao) {
      // exibir uma mensagem de alerta quando a velocidade máxima for utrapassada
      case "1":
        velocidade += naveEspacial.acelerarNave();
        if (velocidade > maximo) {
          alert(
            "Sua Velocidade atual: " + velocidade + " está maior que a máxima permitida: " + maximo
          );
        }
        break;

      case "2":
        naveEspacial.pararNave();
        break;

      case "3":
        alert("Programa encerrando");
        break;

      default:
        menuInterativo();
        break;
    }
  } while (opcao !== "3");
}

executarPrograma();
