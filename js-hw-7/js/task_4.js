'use strict';

let count = 0;

counter.addEventListener('click', function (e) {
  const element = e.target;
  const value = document.getElementById('value');
  if (element.dataset.action === 'increment') {
    increment();
  } else if (element.dataset.action === 'decrement') {
    decrement();
  }
  value.textContent = count;
});

const increment = () => {
  count += 1;
}
const decrement = () => {
  count -= 1;
}
