module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('karma-spec-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        jasmineHtmlReporter: {
            suppressAll: true // removes the duplicated traces
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage/pnkbe-site'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true,
            thresholds: {
                // TODO increase this numbers when the tests improved
                statements: 0,
                branches: 0,
                functions: 0,
                lines: 0
            }
        },
        reporters: ['spec', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadlessCI'],
        singleRun: false,
        restartOnFileChange: true,
        customLaunchers: {
            ChromeHeadlessCI: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox', '--disable-gpu']
            },
        }
    });
};
