/*
    Уроки Node JS / #3 - Функции, модули и директива require()
    Именованные функции
    модули
    require
*/

var counter = require('./array');

var test = function() {
    console.log("hello");
}

function call(func) {
    func();
}

call(test);

console.log(counter([1,5,7,22,245]));


