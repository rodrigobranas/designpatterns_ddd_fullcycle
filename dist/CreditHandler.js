"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreditHandler {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
        this.operation = "credit";
    }
    notify(command) {
        const account = this.accountRepository.get(command.accountDocument);
        if (account) {
            account.credit(command.amount);
        }
    }
}
exports.default = CreditHandler;
