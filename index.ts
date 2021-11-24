import { Inject, Injectable } from './decorators';
import { LogService } from './Loggers';
import { Dependencies } from './modules';

class InjectedServiceA {
    @Inject(Dependencies.LogServiceA)
    private logService: LogService;
    test() {
        this.logService.log('test');
    }
}

class InjectedServiceB {
    @Inject(Dependencies.LogServiceB)
    private logService: LogService;
    test() {
        this.logService.log('test');
    }
}

const aInstance = new InjectedServiceA();
aInstance.test();

const bInstance = new InjectedServiceB();
bInstance.test();

@Injectable(Dependencies.LogServiceA)
export class LogServiceC extends LogService {
    log(msg: string): void {
        console.log(`LogServiceA -> ${msg}`);
    }
}

class InjectedServiceC {
    @Inject(Dependencies.LogServiceA)
    private logService: LogService;
    test() {
        this.logService.log('test');
    }
}
const cInstance = new InjectedServiceC();
cInstance.test();
