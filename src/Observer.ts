import Command from "./Command";

export default interface Observer {
    operation: string;
    notify(command: Command): void;
}
