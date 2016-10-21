var money;
var service = require('./app/service/execute.js');
var post = require('./app/typetalkpost.js');

function taskA() {
    console.log(money + "on taskA");
    money = service.getPayMoney("massan");
}
function taskB() {
    console.log(money + "on taskB");
    post.typetalkPost(money)
}

// Promiseが聞いてないくーーーーー
var promise = Promise.resolve();
promise
    .then(taskA)
    .then(taskB);