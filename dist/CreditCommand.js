"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreditCommand {
    constructor(accountDocument, amount) {
        this.accountDocument = accountDocument;
        this.amount = amount;
        this.operation = "credit";
    }
}
exports.default = CreditCommand;
