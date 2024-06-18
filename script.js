let angkaRandom = Math.floor(Math.random() * 100) + 1; 
let coba = 0;

function makeGuess() {
  const userInp = Number(document.getElementById('guessInput').value);
  const result = document.getElementById('result');
  coba++;

  if (userInp === angkaRandom) {
    result.textContent = `Selamat! Kamu menebak dengan benar dalam ${coba} percobaan.`;
    result.style.color = 'green';
  } else if (userInp < angkaRandom) {
    result.textContent = 'Tebakanmu terlalu rendah. Coba lagi!';
    result.style.color = 'red';
  } else if (userInp > angkaRandom) {
    result.textContent = 'Tebakanmu terlalu tinggi. Coba lagi!';
    result.style.color = 'red';
  }

  document.getElementById('guessInput').value = ''; // Clear the input field after each guess
}