/// <reference types="webdriverio"/>

declare class WDIOReporter {
    constructor(options?: WebdriverIO.Options);

    onRunnerStart(runner?: any): void;
    onBeforeCommand(payload?: any): void;
    onAfterCommand(payload?: any): void;
    onScreenshot(): void;
    onSuiteStart(params?: any): void;
    onHookStart(hook?: any): void;
    onHookEnd(hook?: any): void;
    onTestStart(test?: WebdriverIO.Test): void;
    onTestPass(test?: WebdriverIO.Test): void;
    onTestFail(test?: WebdriverIO.Test): void;
    onTestSkip(test?: WebdriverIO.Test): void;
    onTestEnd(test?: WebdriverIO.Test): void;
    onSuiteEnd(suite?: WebdriverIO.Suite): void;
    onRunnerEnd(runner?: any): void;

    write(content: string): any;
}

declare module "@wdio/reporter" {
    export default WDIOReporter
}
