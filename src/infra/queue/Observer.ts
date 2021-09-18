import Command from "../../application/command/Command";

export default interface Observer {
    operation: string;
    notify(command: Command): void;
}
