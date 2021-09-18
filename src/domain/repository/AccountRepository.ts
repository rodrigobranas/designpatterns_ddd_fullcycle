import Account from "../entity/Account";

export default interface AccountRepository {
    save(account: Account): void;
    get(accountDocument: string): Account;
}