/**
 * Created by masahirayamamoto on 2016/09/08.
 */

var hog = require('./repository/daily-money-report');
var conf = require("../config/config");

var userId = "mmm";
var dayCache = '230000';

console.log(conf.targetUrl());

//hog.insertCreditEstimate(userId, dayCache);
//hog.selectFromTable();