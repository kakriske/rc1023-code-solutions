const $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  const name = $contactForm.elements.name.value;
  const email = $contactForm.elements.email.value;
  const message = $contactForm.elements.message.value;
  const messageData = {
    name,
    email,
    message,
  };
  console.log('messageData:', messageData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
