"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccountApplicationService_1 = __importDefault(require("../src/application/service/AccountApplicationService"));
const AccountRepositoryMemory_1 = __importDefault(require("../src/infra/repository/AccountRepositoryMemory"));
const CreditHandler_1 = __importDefault(require("../src/domain/handler/CreditHandler"));
const DebitHandler_1 = __importDefault(require("../src/domain/handler/DebitHandler"));
const Publisher_1 = __importDefault(require("../src/infra/queue/Publisher"));
const TransferHandler_1 = __importDefault(require("../src/domain/handler/TransferHandler"));
let service;
beforeEach(function () {
    const publisher = new Publisher_1.default();
    const accountRepository = new AccountRepositoryMemory_1.default();
    publisher.register(new CreditHandler_1.default(accountRepository));
    publisher.register(new DebitHandler_1.default(accountRepository));
    publisher.register(new TransferHandler_1.default(accountRepository));
    service = new AccountApplicationService_1.default(publisher, accountRepository);
});
test("Deve criar uma conta", function () {
    service.create("111.111.111-11");
    const account = service.get("111.111.111-11");
    expect(account.getBalance()).toBe(0);
});
test("Deve criar uma conta e fazer um crédito", function () {
    service.create("111.111.111-11");
    service.credit("111.111.111-11", 1000);
    const account = service.get("111.111.111-11");
    expect(account.getBalance()).toBe(1000);
});
test("Deve criar uma conta e fazer um débito", function () {
    service.create("111.111.111-11");
    service.credit("111.111.111-11", 1000);
    service.debit("111.111.111-11", 500);
    const account = service.get("111.111.111-11");
    expect(account.getBalance()).toBe(500);
});
test("Deve criar duas contas e fazer uma transferência", function () {
    service.create("111.111.111-11");
    service.credit("111.111.111-11", 1000);
    service.create("222.222.222-22");
    service.credit("222.222.222-22", 500);
    service.transfer("111.111.111-11", "222.222.222-22", 700);
    const accountFrom = service.get("111.111.111-11");
    const accountTo = service.get("222.222.222-22");
    expect(accountFrom.getBalance()).toBe(300);
    expect(accountTo.getBalance()).toBe(1200);
});
