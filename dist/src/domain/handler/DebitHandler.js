"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DebitHandler {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
        this.operation = "debit";
    }
    notify(command) {
        const account = this.accountRepository.get(command.accountDocument);
        if (account) {
            account.debit(command.amount);
        }
    }
}
exports.default = DebitHandler;
