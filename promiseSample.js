var fs = require('fs');
var async = require('async');
var Promise = require('promise');



function firstFunc() {

    // Promiseオブジェクトを返却する.処理成功時にはresolveが呼ばれる
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async Hello world');
        }, 16);

    });
}

firstFunc().then(function (value) {
    // 非同期処理成功
    console.log(value);    // => 'Async Hello world'
}).catch(function (error) {
    // 非同期処理失敗。呼ばれない
    console.log(error);
});