import WDIOReporter from '@wdio/reporter'

export default class CustomReporter extends WDIOReporter {
    constructor (options) {
        super(options)
    }
}
