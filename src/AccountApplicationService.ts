import Account from "./Account";
import AccountBuilder from "./AccountBuilder";
import AccountRepository from "./AccountRepository";
import CreditCommand from "./CreditCommand";
import DebitCommand from "./DebitCommand";
import Publisher from "./Publisher";
import TransferCommand from "./TransferCommand";

export default class AccountApplicationService {

    constructor (readonly publisher: Publisher, readonly accountRepository: AccountRepository) {
    }

    create(document: string) {
        const account = new AccountBuilder(document).build();
        this.accountRepository.save(account);
    }

    credit(accountDocument: string, amount: number) {
        const creditCommand = new CreditCommand(accountDocument, amount);
        this.publisher.publish(creditCommand);
    }

    debit(accountDocument: string, amount: number) {
        const debitCommand = new DebitCommand(accountDocument, amount);
        this.publisher.publish(debitCommand);
    }

    transfer(accountDocumentFrom: string, accountDocumentTo: string, amount: number) {
        const transferCommand = new TransferCommand(accountDocumentFrom, accountDocumentTo, amount);
        this.publisher.publish(transferCommand);
    }

    get(accountDocument: string) {
        return this.accountRepository.get(accountDocument);
    }
}
