module.exports.arr_counter = function(array) {
    return array.length;
};
module.exports.someval = 5;
module.exports.multiply = function(x,y) {
    return `${x} * ${y} = ${x*y}`;
};

/*
    
var arr_counter = function(array) {
    return array.length;
};

var someval = 5;

var multiply = function(x,y) {
    return `${x} * ${y} = ${x*y}`;
};

*/

console.log(this.multiply(4,4));


/* 

module.exports = {
    arr_counter : arr_counter,
    someval: someval,
    multiply: multiply
};

*/


