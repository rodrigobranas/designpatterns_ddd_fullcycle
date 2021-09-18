"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransferService {
    transfer(from, to, amount) {
        from.debit(amount);
        to.credit(amount);
    }
}
exports.default = TransferService;
