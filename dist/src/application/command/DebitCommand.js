"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DebitCommand {
    constructor(accountDocument, amount) {
        this.accountDocument = accountDocument;
        this.amount = amount;
        this.operation = "debit";
    }
}
exports.default = DebitCommand;
