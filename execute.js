var service = require('./app/service/execute.js');
var post = require('./app/typetalkpost.js');
var Promise = require('promise');

var money;
var promise = Promise.resolve();
promise
    .then(function(){
        console.log(money + "on taskA");
        money = service.getPayMoney("massan");
    })
    .then(function(){
        console.log(money + "on taskB");
        post.typetalkPost(money)
    });