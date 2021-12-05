'use strict';

import users from './users.js';
// Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = users => users.map(user => user.balance).reduce((sum, value) => sum + value, 0);


console.log(calculateTotalBalance(users)); // 20916
