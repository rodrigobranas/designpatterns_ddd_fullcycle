"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccountBuilder_1 = __importDefault(require("./AccountBuilder"));
const CreditCommand_1 = __importDefault(require("./CreditCommand"));
const DebitCommand_1 = __importDefault(require("./DebitCommand"));
const TransferCommand_1 = __importDefault(require("./TransferCommand"));
class AccountApplicationService {
    constructor(publisher, accountRepository) {
        this.publisher = publisher;
        this.accountRepository = accountRepository;
    }
    create(document) {
        const account = new AccountBuilder_1.default(document).build();
        this.accountRepository.save(account);
    }
    credit(accountDocument, amount) {
        const creditCommand = new CreditCommand_1.default(accountDocument, amount);
        this.publisher.publish(creditCommand);
    }
    debit(accountDocument, amount) {
        const debitCommand = new DebitCommand_1.default(accountDocument, amount);
        this.publisher.publish(debitCommand);
    }
    transfer(accountDocumentFrom, accountDocumentTo, amount) {
        const transferCommand = new TransferCommand_1.default(accountDocumentFrom, accountDocumentTo, amount);
        this.publisher.publish(transferCommand);
    }
    get(accountDocument) {
        return this.accountRepository.get(accountDocument);
    }
}
exports.default = AccountApplicationService;
