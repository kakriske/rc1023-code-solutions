let currentIndex = 0;
const $letters = document.querySelectorAll('span');
let $currentLetter = $letters[currentIndex];

document.addEventListener('keydown', function (event) {
  if (currentIndex === $letters.length) {
    return;
  }
  if (event.key === $currentLetter.textContent) {
    $currentLetter.className = 'correct';
    currentIndex++;
    $currentLetter = $letters[currentIndex];
    $currentLetter.className = 'current';
  } else {
    $currentLetter.className = 'current incorrect';
  }
});
