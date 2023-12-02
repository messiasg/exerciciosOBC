function escalarJogador() {
  const posicao = document.getElementById("posicao").value;
  const nomeJogador = document.getElementById("nomeJogador").value;
  const numeroCamisa = document.getElementById("numeroCamisa").value;

  const confirmacao = confirm(
    "Você confirma as seguintes informações:\n" +
      "Posição: " +
      posicao +
      ", Nome: " +
      nomeJogador +
      ", Número da camisa: " +
      numeroCamisa
  );

  if (confirmacao) {
    const time = document.getElementById("time");
    const itemJogador = document.createElement("li");
    itemJogador.id = "Jogador -" + numeroCamisa;
    itemJogador.innerText =
      "Posição: " + posicao + ", Nome: " + nomeJogador + ", Número da camisa: " + numeroCamisa;

    time.appendChild(itemJogador);

    document.getElementById("posicao").value = "";
    document.getElementById("nomeJogador").value = "";
    document.getElementById("numeroCamisa").value = "";
  }
}

function removerJogador() {
  const numero = document.getElementById("numeroRemover").value;
  const jogadorRemovido = document.getElementById("Jogador -" + numero);

  const confirmacaoRemocao = confirm(
    "Você confirma que deseja remover o seguinte jogador:\n" + jogadorRemovido.innerText + "?"
  );

  if (confirmacaoRemocao) {
    document.getElementById("time").removeChild(jogadorRemovido);
    document.getElementById("numeroRemover").value = "";
  }
}
