'use strict'

const categories = document.getElementById('categories');
const quantity = categories.children.length;
console.log(`В списке ${quantity} категории`);

const list = [...document.getElementsByClassName('item')];

list.forEach(num => {
  const title = num.firstElementChild.textContent;
  console.log(`Категория ${title}`);
  const quantity = num.querySelectorAll('li').length;
  console.log(`Количество элементов: ${quantity}`);
});