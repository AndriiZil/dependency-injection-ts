export abstract class LogService {
    abstract log(message: string): void;
}

export class LogServiceA extends LogService {
    log(msg: string): void {
        console.log(`LogServiceA -> ${msg}`);
    }
}

export class LogServiceB extends LogService {
    log(msg: string): void {
        console.log(`LogServiceB -> ${msg}`);
    }
}
