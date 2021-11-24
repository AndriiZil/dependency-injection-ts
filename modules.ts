import { LogServiceA } from './Loggers';
import { LogServiceB } from './Loggers';

export enum Dependencies {
    LogServiceA = 'LogServiceA',
    LogServiceB = 'LogServiceB',
}

export const DependenciesMapping = [
    { key: Dependencies.LogServiceA, value: LogServiceA },
    { key: Dependencies.LogServiceB, value: LogServiceB },
];
