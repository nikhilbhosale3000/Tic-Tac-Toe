const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector("#resetGame");
const newGame = document.querySelector("#newGame");
const msg = document.querySelector(".msg");

let mark = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (mark) {
      box.classList.add("xMark");
      box.textContent = "X";
      mark = false;
    } else {
      box.classList.add("oMark");
      box.textContent = "O";
      mark = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.textContent = `Winner is ${winner}`;
  msg.classList.remove("hide");
  for (box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

const resetGame = () => {
  mark = true;
  msg.classList.add("hide");
  boxes.forEach((box) => {
    box.disabled = false;
    box.textContent = "";
  });
};

resetButton.addEventListener("click", () => {
  resetGame();
});
