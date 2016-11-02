var service = require('./app/service/execute.js');
var post = require('./app/typetalkpost.js');
var Promise = require('promise');

var promise = new Promise(function (resolve) {
    resolve(service.getPayMoney("massan"));
});

promise
    .then(function (value) {
        post.typetalkPost(value);})
    .catch(function (error) {
        console.log(error);
    });