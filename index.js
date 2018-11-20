/*
    Уроки Node JS / #8 - Работа и создание сервера на Node
*/

var http = require('http');

var server = http.createServer(function(req, res){
    console.log("URL: " + req.url)
    res.writeHeader(200 , {"Content-Type" : "text/plain; charset=utf-8"});
    res.end('Hello Tits! попка как ягодка');
});

server.listen(3000, '127.0.0.1');
console.log('Port 3000 tits!');