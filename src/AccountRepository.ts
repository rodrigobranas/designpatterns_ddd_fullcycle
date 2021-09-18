import Account from "./Account";

export default interface AccountRepository {
    save(account: Account): void;
    get(accountDocument: string): Account;
}