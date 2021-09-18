"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountRepositoryMemory {
    constructor() {
        this.accounts = [];
    }
    get(accountDocument) {
        const account = this.accounts.find(account => account.document === accountDocument);
        if (!account)
            throw new Error("Account not found");
        return account;
    }
    save(account) {
        this.accounts.push(account);
    }
}
exports.default = AccountRepositoryMemory;
