function gerarBotoesDeLetras() {
  const jogadores = ["TOOT", "OTTO"];
  const letras = ["T", "O"];

  jogadores.forEach(jogador => {
    letras.forEach(letra => {
      const linha = document.querySelector(`.letter-row[data-player="${jogador}"][data-letter="${letra}"]`);

      for (let i = 0; i < 6; i++) {
        const btn = document.createElement("button");
        btn.classList.add("letter-btn");
        btn.textContent = letra;
        btn.dataset.player = jogador;
        linha.appendChild(btn);
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

