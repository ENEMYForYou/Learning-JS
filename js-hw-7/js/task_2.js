'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const fragment = document.createDocumentFragment();
const list = document.getElementById('ingredients');

ingredients.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  fragment.appendChild(li)
})

list.appendChild(fragment);


