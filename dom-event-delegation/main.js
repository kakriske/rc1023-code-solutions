const $taskClick = document.querySelector('.task-list');

$taskClick.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    const $item = event.target.closest('.task-list-item');
    console.log($item);
    $item.remove();
  }
});
