function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('Value of', event.target.name + ':', event.target.value);
}

const $focusEvent = document.querySelector('#user-name');
const $blurEvent = document.querySelector('#user-email');
const $lastEvent = document.querySelector('#user-message');

$focusEvent.addEventListener('input', handleInput);
$blurEvent.addEventListener('input', handleInput);
$lastEvent.addEventListener('input', handleInput);

$focusEvent.addEventListener('focus', handleFocus);
$blurEvent.addEventListener('focus', handleFocus);
$lastEvent.addEventListener('focus', handleFocus);

$focusEvent.addEventListener('blur', handleBlur);
$blurEvent.addEventListener('blur', handleBlur);
$lastEvent.addEventListener('blur', handleBlur);
