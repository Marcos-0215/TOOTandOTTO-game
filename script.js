
function gerarBotoesDeLetras() {
  const jogadores = ["TOOT", "OTTO"];
  const letras = ["T", "O"];
       
    
    // TOOT - letras T
    const tootT = document.querySelector('.letter-row[data-player="TOOT"][data-letter="T"]');
    for (let i = 0; i < 6; i++) {
      const btn = document.createElement("button");
      btn.classList.add("letter-btn");
      btn.textContent = "T";
      btn.dataset.player = "TOOT";
      tootT.appendChild(btn);
    }
  
    // TOOT - letras O
    const tootO = document.querySelector('.letter-row[data-player="TOOT"][data-letter="O"]');
    for (let i = 0; i < 6; i++) {
      const btn = document.createElement("button");
      btn.classList.add("letter-btn");
      btn.textContent = "O";
      btn.dataset.player = "TOOT";
      tootO.appendChild(btn);
    }
  
    // OTTO - letras T
    const ottoT = document.querySelector('.letter-row[data-player="OTTO"][data-letter="T"]');
    for (let i = 0; i < 6; i++) {
      const btn = document.createElement("button");
      btn.classList.add("letter-btn");
      btn.textContent = "T";
      btn.dataset.player = "OTTO";
      ottoT.appendChild(btn);
    }
  
    // OTTO - letras O
    const ottoO = document.querySelector('.letter-row[data-player="OTTO"][data-letter="O"]');
    for (let i = 0; i < 6; i++) {
      const btn = document.createElement("button");
      btn.classList.add("letter-btn");
      btn.textContent = "O";
      btn.dataset.player = "OTTO";
      ottoO.appendChild(btn);
    }
    

  
}


const rows = 4;
const cols = 6;

let currentPlayer = "TOOT";
let selectedLetter = null;
let selectedButton = null;

// Atualiza o painel com o jogador atual
function updatePlayerInfo() {
  document.getElementById("current-player").textContent = currentPlayer;
}

// Seleção de letras
document.addEventListener("click", (event) => {
  const btn = event.target;
  if (!btn.classList.contains("letter-btn")) return;

  if (btn.dataset.player !== currentPlayer || btn.disabled) return;

  // De-selecionar botão anterior, se houver
  if (selectedButton && selectedButton !== btn) {
    selectedButton.classList.remove("selected");
  }

  // Seleciona ou de-seleciona
  if (selectedButton === btn) {
    btn.classList.remove("selected");
    selectedButton = null;
    selectedLetter = null;
  } else {
    btn.classList.add("selected");
    selectedButton = btn;
    selectedLetter = btn.textContent;
  }
});

// Jogada ao clicar em uma coluna
function adicionarEventosNasColunas() {
  document.querySelectorAll(".top-cell").forEach(topCell => {
    topCell.addEventListener("click", () => {
      if (!selectedLetter) {
        mostrarMensagem("Escolha uma letra antes de jogar.");
        return;
      }

      const col = parseInt(topCell.dataset.col);
      let jogou = false;

      for (let row = rows - 1; row >= 0; row--) {
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
        if (!cell.textContent) {
          cell.textContent = selectedLetter;
          cell.classList.add(currentPlayer.toLowerCase());

          selectedButton.disabled = true;
          selectedButton.classList.remove("selected");
          selectedButton.classList.add("used");

          selectedLetter = null;
          selectedButton = null;

          limparMensagem();
          switchPlayer();
          jogou = true;
          break;
        }
      }

      if (!jogou) {
        mostrarMensagem("Movimento inválido: coluna cheia.");
      }
    });
  });
}

// Alterna o jogador
function switchPlayer() {
  currentPlayer = currentPlayer === "TOOT" ? "OTTO" : "TOOT";
  updatePlayerInfo();
}

// Exibe mensagens no painel
function mostrarMensagem(msg) {
  document.getElementById("message-log").textContent = msg;
}

function limparMensagem() {
  document.getElementById("message-log").textContent = "";
}

// Cria o tabuleiro visual
function createBoard() {
  const boardElement = document.getElementById("game-board");
  boardElement.innerHTML = "";

  // Linha do topo (clicável)
  for (let col = 0; col < cols; col++) {
    const topCell = document.createElement("div");
    topCell.classList.add("cell", "top-cell");
    topCell.dataset.col = col;
    boardElement.appendChild(topCell);
  }

  // Corpo do tabuleiro
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      boardElement.appendChild(cell);
    }
  }

  adicionarEventosNasColunas();
}




document.addEventListener("DOMContentLoaded", () => {
  gerarBotoesDeLetras();
  createBoard();
  updatePlayerInfo();  
});

