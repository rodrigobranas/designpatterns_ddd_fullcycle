import Command from "../../application/command/Command";
import Observer from "./Observer";

export default class Publisher {
    observers: Observer[];

    constructor () {
        this.observers = [];
    }

    register(observer: Observer) {
        this.observers.push(observer);
    }

    publish(command: Command) {
        for (const observer of this.observers) {
            if (observer.operation === command.operation) {
                observer.notify(command);
            }
        }
    }
}
