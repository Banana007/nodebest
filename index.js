/*
    Уроки Node JS / #6 - Написание и чтение файлов
*/

var fs = require('fs');


var file_readed = fs.readFile('text.txt', 'utf8', function(err, data) {
    console.log(data)
}); // прочитать содержимое из файла. Когда прочитан файл, тогда запустится нижестощий код, поэтому и называется Sync

console.log('test');

fs.writeFile('some.txt', 'eee boy!!!', function(err, data){

});

console.log('test');

// var file_write = fs.writeFileSync('some_new_file.txt', 'super porno website \n' + file_readed);
// var file_readed2 = fs.readFileSync('some_new_file.txt', 'utf8'); // прочитать содержимое из файла. Когда прочитан файл, тогда запустится нижестощий код, поэтому и называется Sync


// console.log(file_readed2);