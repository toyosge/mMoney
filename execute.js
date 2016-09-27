var service = require('./app/service/execute.js');
var __ = require('underscore');
//var nightmare = require('./nightmare.js');

//function getNightmare() {
//    nightmare.getMoneyFromUcho();
//}

//function output(argument) {
//    console.log(argument);
//    console.log("とおっていますね");
//    service.addedPayMoney("massan",argument);
//}


service.addedPayMoney("massan", __.random(0, 100));
