declare class WDIOReporter {
    constructor(options?: any);

    onRunnerStart(runner?: any): void;
    onBeforeCommand(payload?: any): void;
    onAfterCommand(payload?: any): void;
    onScreenshot(): void;
    onSuiteStart(params?: any): void;
    onHookStart(hook?: any): void;
    onHookEnd(hook?: any): void;
    onTestStart(test?: any): void;
    onTestPass(test?: any): void;
    onTestFail(test?: any): void;
    onTestSkip(test?: any): void;
    onTestEnd(test?: any): void;
    onSuiteEnd(suite?: any): void;
    onRunnerEnd(runner?: any): void;

    write(content: string): any;
}

declare module "@wdio/reporter" {
    export default WDIOReporter
}
