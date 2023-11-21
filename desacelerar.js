// crie uma função para desacelerar 20km/s a cada segundo (considere, no código, que cada iteração de um laço de repetição é 1 segundo)

function desacelar(velocidade, imprimir) {
  while (velocidade > 0) {
    imprimir(velocidade);
    velocidade -= 20;
  }
  return console.log("A nave está parada, pode-se abrir as comportas.");
}

// deve ser impresso uma atualização a cada mudança que houver na velocidade
desacelar(150, function (velocidade) {
  console.log("A velocidade da nave é " + velocidade + " km/s");
});
