import AccountRepository from "../repository/AccountRepository";
import CreditCommand from "../../application/command/CreditCommand";
import Observer from "../../infra/queue/Observer";

export default class CreditHandler implements Observer {
    operation = "credit";

    constructor (readonly accountRepository: AccountRepository) {
    }

    notify(command: CreditCommand): void {
        const account = this.accountRepository.get(command.accountDocument);
        if (account) {
            account.credit(command.amount);
        }
    }
}