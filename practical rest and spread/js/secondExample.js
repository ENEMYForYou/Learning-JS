'use strict';

const user1 = {
    name: 'Alex',
    age: '24',
};

const options = {
    sex: 'male',
    age: '24',
    size: '200px'
}

const res = { ...user1, ...options};

const getSizeAndAge = (options = {}) => {
    if (Object.keys(options).length === 0) {
        console.error('Empty object');
        return
    }
    const {
        size,
        age
    } = options;
    return { size, age }
}
console.log(getSizeAndAge(options));

// Object.assign(res, user1, options);

// console.log(res);