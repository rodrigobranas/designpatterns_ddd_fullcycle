import Command from "./Command";

export default class DebitCommand implements Command {

    operation = "debit";

    constructor (readonly accountDocument: string, readonly amount: number) {
    }
}