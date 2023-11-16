//Boas vindas
const nomePiloto = prompt("Olá, seja bem-vindo a nave espacial\n" + "Digite o seu nome:");
let velocidade = 0;

//Confirmação velocidade
while (velocidade === 0) {
  velocidade = parseFloat(prompt("Digite a velocidade que deseja:"));
  if (velocidade !== 0) {
    let confirmacao = confirm("Você confirma que a nova velocidade é " + velocidade + "Km/h?");
    if (!confirmacao) {
      velocidade = 0;
    }
  }
}

//Alerta sobre a velocidade
if (velocidade <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade");
} else if (velocidade <= 40) {
  alert("Você está devagar. Pode aumentar mais.");
} else if (velocidade <= 80) {
  alert("Parece uma boa velocidade para manter");
} else if (velocidade <= 100) {
  alert("Velocidade alta. Considere diminuir.");
} else {
  alert("Velocidade perigosa. Controle automático forçado.");
}

// Dados gerais
alert("Nome piloto: " + nomePiloto + "\nVelocidade atual: " + velocidade +"Km/h");
