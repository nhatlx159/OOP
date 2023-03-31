"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(accountName, accountNumber, balance) {
        this.accountNumber = 999999;
        this.accountName = "undefind";
        this.balance = 50000;
        this.RATE = 0.035;
        if (accountNumber <= 0) {
            console.log("account number invalid");
        }
        if (accountName == "") {
            console.log("account name invalid");
        }
        if (balance < 50000) {
            console.log("balance invalid");
        }
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            console.log('deposit successfully');
            return true;
        }
        console.log('deposit successfully');
        return false;
    };
    Account.prototype.withDraw = function (amount, fee) {
        if (amount > 0 && amount + fee < this.balance) {
            this.balance = this.balance - (amount + fee);
            console.log('with draw successfully');
            return true;
        }
        console.log('with draw failed');
        return false;
    };
    Account.prototype.addInterest = function () {
        this.balance = this.balance + (this.balance * this.RATE);
    };
    Account.prototype.transfer = function (account1, amount) {
        if (this.balance - amount >= 0 && amount > 0) {
            this.balance = this.balance - amount;
            account1.balance = account1.balance + amount;
            return true;
        }
        return false;
    };
    Account.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.toString = function () {
        var x = this.balance.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return "accountNumber: ".concat(this.accountNumber, " accountName: ").concat(this.accountName, " balance: ").concat(x);
    };
    return Account;
}());
exports.Account = Account;
