"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = __importDefault(require("./Transaction"));
class Account {
    constructor(accountBuilder) {
        this.bank = accountBuilder.bank;
        this.branch = accountBuilder.branch;
        this.account = accountBuilder.account;
        this.document = accountBuilder.document;
        this.transactions = [];
    }
    credit(amount) {
        this.transactions.push(new Transaction_1.default("credit", amount));
    }
    debit(amount) {
        this.transactions.push(new Transaction_1.default("debit", amount));
    }
    getBalance() {
        let balance = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === "credit") {
                balance += transaction.amount;
            }
            if (transaction.type === "debit") {
                balance -= transaction.amount;
            }
        }
        return balance;
    }
}
exports.default = Account;
