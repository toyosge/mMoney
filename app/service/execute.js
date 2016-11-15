var repo = require('../repository/daily-money-report');

exports.addedPayMoney = function (userId, money) {
    repo.insertCreditEstimate(userId, money);
};

exports.getPayMoney = function (userId) {
    return repo.findByUserId(userId);
};

