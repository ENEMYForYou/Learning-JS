'use strict';

const input = document.getElementById('validation-input');
const value = '';

input.addEventListener('blur', function (e) {
  const element = e.target;
  if (element.value.length == element.dataset.length) {
    element.className = 'valid';
  } else element.className = 'invalid'
});