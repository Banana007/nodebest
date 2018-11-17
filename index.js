/*
    Уроки Node JS / #3 - Функции, модули и директива require()
    Именованные функции
    модули
    require
*/

var things = require('./things');

var test = function() {
    console.log("hello");
}

function call(func) {
    func();
}

console.log(things.someval);

