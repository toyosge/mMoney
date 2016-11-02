var repo = require('../repository/daily-money-report');

exports.addedPayMoney = function (userId, money) {
    console.log("あんていの");
    repo.insertCreditEstimate(userId, money);
};

exports.getPayMoney = function (userId) {
    console.log("これぞ");
    return repo.findByUserId(userId);
};

