'use strict';

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
}

function Cashier(name, productDatabase) {
    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = 0;
    this.totalPrice = 0;

    this.countTotalPrice = function(order) {
        let sum = 0;

        for (let product in this.productDatabase) {
            if (order[product]) {
            sum += order[product] * this.productDatabase[product];    
            }            
        }
        this.totalPrice = sum;
        return sum;
    }

    this.countChange = function () {
        return this.totalPrice > this.customerMoney
            ? null
            : this.customerMoney - this.totalPrice;

        // if (this.totalPrice > this.customerMoney) {
        //     return null;
        // } else {
        //     return this.customerMoney - this.totalPrice;
        // }
    }

    this.setCustomerMoney = function (value) {
        this.customerMoney = value;
    }
    this.onSuccess = function (change) {
        console.log(`Thanks for your purchase! Your change ${change}`);
    }
    this.onError = function () {
        console.log('Sorry, you have not enought money');
    }
    this.reset = function () {
        this.customerMoney = 0;
    }
}
const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1,
}

const mango = new Cashier('Mango', products);

console.log(mango.name); //Mango
console.log(mango.productDatabase); //ссылка на баззу данных продуктов (объект)
console.log(mango.customerMoney); //0

const totalPrice = mango.countTotalPrice(order);
console.log(totalPrice); //110
mango.setCustomerMoney(300);
console.log(mango.customerMoney); //300
const change = mango.countChange();
console.log(change); // 190

if (change !== null) {
    mango.onSuccess(change);
} else {
    mango.onError();
}

mango.reset();
console.log(mango.customerMoney);