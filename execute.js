/**
 * Created by masahirayamamoto on 2016/09/08.
 */

var repo = require('./app/repository/daily-money-report.js');

exports.executeQuery = function () {
    console.log("始まります");
//    repo.insertCreditEstimate("mmmmmmm", "40000");
    console.log(repo.findByUserId("massan"));
    console.log("おわります。");
};
