const $countDown = document.querySelector('.countdown-display');

function countDown(count) {
  $countDown.textContent = count;
  if (count === 0) {
    $countDown.textContent = '~Earth beeeelooowww Us~';
  }
}

function startCountDown() {
  let count = 4;
  const countId = setInterval(function () {
    countDown(count);
    if (count > 0) {
      count--;
    } else {
      clearInterval(countId);
    }
  }, 1000);
}
startCountDown();
