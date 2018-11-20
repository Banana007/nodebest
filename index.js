/*
    Уроки Node JS / #9 - Работа с потоками в Node JS
    https://www.youtube.com/watch?v=Sqk-zR9KS2Q&index=9&list=PL0lO_mIqDDFX0qH9w5YQIDV6Wxy0oawet
    Потоки
    Как загружается видео? Частями а не полностью. В ноде мы можем делать так же, а не ждать пока все загрузится.
    Будем читать текст частями.
*/

var fs = require('fs');


// var article = fs.readFileSync('article.txt', 'utf8', function(){});
var myReadShort = fs.createReadStream(__dirname + '/article.txt');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myReadShort.on('data', function(item) {
    console.log('New data ');
    myWriteShort.write(item);
});