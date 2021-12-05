'use strict';

import users from './users.js';
// Получить массив всех умений всех пользователей (поле skills), 
// при этом не должно быть повторяющихся умений и они должны быть 
// отсортированы в алфавитном порядке.
const getSortedUniqueSkills = users =>
  users
    .map(user => user.skills)
    .reduce((res, current) => {
      res.push(...current);
      return res;
    },[])
    .sort()
    .filter((value, index, arr) => arr.indexOf(value) === index);
  
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
