let countClicks = [];
const $hotButton = document.querySelector('.hot-button');
console.log($hotButton);
const $clickCount = document.querySelector('.click-count');
console.log($clickCount);

function addClick(event) {
  countClicks++;
  console.log(countClicks);
  document.querySelector('.click-count').textContent = countClicks;
  if (countClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (countClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (countClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (countClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (countClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', addClick);
