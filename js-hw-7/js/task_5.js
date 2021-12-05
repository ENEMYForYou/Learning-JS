'use strict';

const input = document.getElementById('name-input');
const greeting = document.getElementById('name-output')
input.value = '';

input.addEventListener('keyup', function (e) {
  const element = e.currentTarget;
  if (element.value.length == 0) {
    greeting.textContent = 'anonymous';
  } else {
    greeting.textContent = element.value;
  }
});