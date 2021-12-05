'use strict';

const obj = {
    options: 2323,
    age: 22,
};

const map = new Map();

// map.set({ name: 'Alex', age: '24'}, 'string');
// map.set(1, 'number');
// map.set(true, 'boolean');

// console.log(map.size);

// console.log(map);

const set = new Set();

const john = { name: 'John' };
const peter = { name: 'Peter' };
const leya = { name: 'Leya' };



set.add(john);
set.add(peter);
set.add(leya);
set.add(peter);
set.add(leya);
set.add(john);

const values = ['Polly', 'Peter', 'Kris', 'Albert', 'Kris']

const unique = arr => {
    return [...new Set(arr)]
}
console.log(unique(values));
