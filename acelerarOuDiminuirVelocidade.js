// Menu interativo
function menuInterativo() {
  return prompt(
    "\nSelecione a opção abaixo para o que você deseja realizar:" +
    "\n\n1.Acelerar a nave em 5km/s" +
    "\n2.Desacelerar em 5km/s" +
    "\n3.Imprimir dados de bordo" +
    "\n4.Sair do programa"
    );
  }
  
  // Opções do menu
  function acelerarVelocidade(velocidade) {
    return velocidade += 5;
  }
  
  // Por mais que desacelere a nave não pode ter uma velocidade menor que 0km/s
  function desacelerarVelocidade(velocidade) {
    velocidade -= 5;
    if (velocidade < 0) {
      return (velocidade = 0);
    } else {
      return velocidade
    } }

function imprimirDadosBordo(nomeNave, velocidade) {
  return alert("Nome da nave: " + nomeNave + "\nVelocidade Atual: " + velocidade);
}

function executarPrograma() {
  // O programa deve iniciar solicitando o nome da nave e com a velocidade inicialmente em 0
  let nomeNave = prompt(
    "Olá seja bem-vindo a mais um programa espacial! Para iniciarmos digite o nome da sua nave espacial:"
  );
  let velocidade = 0;
  let opcao = "";
  
  do {
    opcao = menuInterativo();
    
    switch (opcao) {
      case "1":
        velocidade = acelerarVelocidade(velocidade);
        break;

      case "2":
        velocidade = desacelerarVelocidade(velocidade);
        break;

      case "3":
        imprimirDadosBordo(nomeNave, velocidade);
        break;

      case "4":
        alert("Programa encerrando");
        break;

      default:
        menuInterativo();
    }
  } while (opcao !== "4");
}

//  Fim execução programa
executarPrograma();
