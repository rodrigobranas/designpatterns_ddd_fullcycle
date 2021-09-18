"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DebitCommand {
    constructor(accountDocumentFrom, accountDocumentTo, amount) {
        this.accountDocumentFrom = accountDocumentFrom;
        this.accountDocumentTo = accountDocumentTo;
        this.amount = amount;
        this.operation = "transfer";
    }
}
exports.default = DebitCommand;
