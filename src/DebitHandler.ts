import AccountRepository from "./AccountRepository";
import DebitCommand from "./DebitCommand";
import Observer from "./Observer";

export default class DebitHandler implements Observer {
    operation = "debit";

    constructor (readonly accountRepository: AccountRepository) {
    }

    notify(command: DebitCommand): void {
        const account = this.accountRepository.get(command.accountDocument);
        if (account) {
            account.debit(command.amount);
        }
    }
}