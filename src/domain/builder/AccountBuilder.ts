import Account from "../entity/Account";

export default class AccountBuilder {
    bank: string | undefined;
    branch: string | undefined;
    account: string | undefined;
    document: string;

    constructor (document: string) {
        this.document = document;
    }

    setBank(bank: string) {
        this.bank = bank;
        return this;
    }

    setBranch(branch: string) {
        this.branch = branch;
        return this;
    }

    setAccount(account: string) {
        this.account = account;
        return this;
    }

    build() {
        const account = new Account(this);
        return account;
    }
}