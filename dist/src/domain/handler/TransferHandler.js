"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TransferService_1 = __importDefault(require("../service/TransferService"));
class TransferHandler {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
        this.operation = "transfer";
    }
    notify(command) {
        const accountFrom = this.accountRepository.get(command.accountDocumentFrom);
        const accountTo = this.accountRepository.get(command.accountDocumentTo);
        if (accountFrom && accountTo) {
            const transferService = new TransferService_1.default();
            transferService.transfer(accountFrom, accountTo, command.amount);
        }
    }
}
exports.default = TransferHandler;
