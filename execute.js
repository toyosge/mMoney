/**
 * Created by masahirayamamoto on 2016/09/08.
 */

console.log("01");
var repo = require('./app/repository/daily-money-report.js');
//repo.selectFromTable();

//Date.prototype.yyyymmdd = function() {
//    var mm = this.getMonth() + 1; // getMonth() is zero-based
//    var dd = this.getDate();
//
//    return [this.getFullYear(), !mm[1] && '0', mm, !dd[1] && '0', dd].join(''); // padding
//};
//
//var date = new Date();
//date.yyyymmdd();
//
//console.log(date.yyyymmdd());

console.log("02");

//exports.executeQuery = function () {
    console.log("03");

    console.log("始まります");
    repo.insertCreditEstimate("mmmmmmm", "20000");
//};
