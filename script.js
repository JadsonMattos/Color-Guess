const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const sortColor = document.getElementById('rgb-color');
const reset = document.getElementById('reset-game');
const score = document.getElementById('score');

let points = 0;

const randomColors = () => {
  const values = '0123465789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += values[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateColor = () => {
  const colors = Array.from(balls).map((ball) => ball.style.backgroundColor);
  const correctColor = colors[Math.floor(Math.random() * colors.length)];
  sortColor.textContent = correctColor;
  return correctColor;
};

const updateScore = () => {
  points += 3;
  score.textContent = `Placar: ${points}`;
};

const verifyColor = (event) => {
  const clicked = event.target.style.backgroundColor;
  const correct = sortColor.textContent;
  answer.innerText = clicked === correct ? 'Acertou!' : 'Errou! Tente novamente!';
  if (clicked === correct) {
    updateScore();
  }
};

const resetGame = () => {
  answer.textContent = 'Escolha uma cor';
  balls.forEach((ball) => {
    const currentBall = ball;
    const color = randomColors();
    currentBall.style.backgroundColor = color;
  });
  generateColor();
};

window.onload = () => {
  balls.forEach((element) => {
    const color = randomColors();
    const currentElement = element;
    currentElement.style.backgroundColor = color;
    element.addEventListener('click', verifyColor);
  });
  generateColor();
  reset.addEventListener('click', resetGame);
};
