const modalB = document.querySelector('.openB');
const modalX = document.querySelector('.modalBox');
const noB = document.querySelector('.noButton');
modalB.addEventListener('click', function () {
  modalX.className = 'modalAct';
});
noB.addEventListener('click', function () {
  modalX.className = 'modalBox';
});
