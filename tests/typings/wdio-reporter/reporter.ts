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

    onTestStart(test) {
        this.write(`Test started ${test.currentTest}`)
    }

    onTestPass(test) {
        this.write(`Test passed ${test.currentTest}`)
    }

    onTestFail(test) {
        this.write(`Test failed ${test.currentTest}`)
    }

    onTestSkip(test) {
        this.write(`Test skipped ${test.currentTest}`)
    }

    onTestEnd(test) {
        this.write(`Test finished ${test.currentTest}`)
    }

    onSuiteEnd() {
    }

    onRunnerEnd() {
    }
}
