/**
 * Created by masahirayamamoto on 2016/09/08.
 */

var service = require('./app/service/execute.js');
var nightmare = require('./nighmare.js');

function getNightmare() {
    nightmare.getMoneyFromUcho();
}

function output(argument) {
    console.log(argument);
//    console.log("とおっていますね");
//    service.addedPayMoney("massan",argument);
}

