function heading() {
  const $findClass = document.querySelector('.message');
  $findClass.textContent = 'Hello There';
}
setTimeout(heading, 2000);
