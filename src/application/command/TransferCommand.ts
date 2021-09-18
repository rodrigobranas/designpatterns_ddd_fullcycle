import Command from "./Command";

export default class DebitCommand implements Command {

    operation = "transfer";

    constructor (readonly accountDocumentFrom: string, readonly accountDocumentTo: string, readonly amount: number) {
    }
}