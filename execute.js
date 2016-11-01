var service = require('./app/service/execute.js');
var post = require('./app/typetalkpost.js');
var Promise = require('promise');


// ばーせんーーーんん https://azu.github.io/promises-book/#introduction
var promise = new Promise(function (resolve) {
    resolve(service.getPayMoney("massan"));
});

promise
    .then(function (value) {
        console.log(value + "on taskB");
        post.typetalkPost(value);})
    .catch(function (error) {
        console.log(error);
    });