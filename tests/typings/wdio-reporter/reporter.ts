import WDIOReporter from '@wdio/reporter'

export default class CustomReporter extends WDIOReporter {
    constructor(options) {
        super(options)
    }

    onRunnerStart() {
    }

    onBeforeCommand() {
    }

    onAfterCommand() {
    }

    onScreenshot() {
    }

    onSuiteStart() {
    }

    onHookStart() {
    }

    onHookEnd() {
    }

    onTestStart() {
    }

    onTestPass() {
    }

    onTestFail() {
    }

    onTestSkip() {
    }

    onTestEnd() {
    }

    onSuiteEnd() {
    }

    onRunnerEnd() {
    }
}
