import manager from './DependencyManager';

export function Inject(key: string) {
    // classInstance: actual class we want to inject this dependecy in
    // propertyName: name of property we want to set injectable class
    return function (classInstance: any, propertyName: string) {
        Object.defineProperty(classInstance, propertyName, {
            get: () => manager.get(key), // get instance of injectable class from the manager
            enumerable: true,
            configurable: true,
        });
    };
}

// Same as DependencyManager.set()
export function Injectable(key: string): Function {
    return function (InjectableClass: { new () }) {
        manager.set(key, new InjectableClass());
    };
}
