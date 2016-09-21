var repo = require('../repository/daily-money-report');

exports.addedPayMoney = function (userId, money) {
    console.log("あんていの");
    repo.insertCreditEstimate(userId, money);
};
