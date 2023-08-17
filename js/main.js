const element = document.querySelector('.js-choice');
const inputNumber = document.querySelector('.calc__inputNumber');
const leftBtn = document.querySelector('.calc__left');
const rightBtn = document.querySelector('.calc__right');

inputNumber.textContent = 1;

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

leftBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  let number = +inputNumber.textContent;
  if (number > 0) {
    number -= 1;
    inputNumber.textContent = number;
  } 
})

rightBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let number = +inputNumber.textContent;
  if (number <= 100) {
    number += 1;
    inputNumber.textContent = number;
  }
});