'use strict';

// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  balance: 0, // Текущий баланс счета
  transactions: [], // История транзакций

  accountTransaction(transactionDatabase, action, amount) {
    if (action === transactionDatabase.DEPOSIT) {
      this.deposit(amount);
    } else {
      this.withdraw(amount);
    }
  },
   /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(transaction) { //type, amount - выдает undefined. Почему??
    this.transactions.push(transaction);
  },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance = this.balance + amount;
    account.createTransaction({ deposit: amount });
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {if (this.balance >= amount) {
      this.balance = this.balance - amount;
      account.createTransaction({ withdraw: amount });
    } else {
      alert('Not enough money');
    }},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Ваш баланс: ${this.balance} UAH`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (i === id) {
        return this.transactions[i];
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      let entry = Object.entries(transaction);
      let action = entry[0][0];
      let amount = entry[0][1];
      if (type === action) {
        sum += amount;
      }
    }
    return sum;
  },
};

account.accountTransaction(Transaction, "deposit", 1500);
account.accountTransaction(Transaction, "withdraw", 500);
account.accountTransaction(Transaction, "deposit", 1000);
account.accountTransaction(Transaction, "withdraw", 2000);
account.accountTransaction(Transaction, "deposit", 100);

console.log(account.getBalance()); // 100

console.log(account.getTransactionDetails(0)); // deposit: 1500

console.log(account.getTransactionTotal("deposit")); //2600

