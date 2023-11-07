const $center = document.querySelector('.center');
const $light = document.querySelector('.light');

$light.addEventListener('click', function () {
  $light.classList.toggle('on');
  $center.classList.toggle('bright');
});
