function gerarBotoesDeLetras() {
  const jogadores = ["TOOT", "OTTO"];

  jogadores.forEach(jogador => {
    const container = document.querySelector(`.letter-buttons[data-player="${jogador}"]`);
    const letras = ["T", "O"];

    letras.forEach(letra => {
      for (let i = 0; i < 6; i++) {
        const btn = document.createElement("button");
        btn.classList.add("letter-btn");
        btn.textContent = letra;
        btn.dataset.player = jogador;
        container.appendChild(btn);
      }
    });
  });
}



document.addEventListener("DOMContentLoaded", () => {
  gerarBotoesDeLetras();
  createBoard();
  updatePlayerInfo();
  // ...
});

