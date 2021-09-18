import Account from "../../domain/entity/Account";
import AccountRepository from "../../domain/repository/AccountRepository";

export default class AccountRepositoryMemory implements AccountRepository {
    accounts: Account[];

    constructor () {
        this.accounts = [];
    }

    get(accountDocument: string): Account {
        const account = this.accounts.find(account => account.document === accountDocument);
        if (!account) throw new Error("Account not found");
        return account;
    }

    save(account: Account) {
        this.accounts.push(account);
    }
}
