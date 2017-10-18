// Karma configuration
// Generated on Mon Oct 02 2017 15:07:29 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    hostname: '127.0.0.1',

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'src',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'karma-typescript'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: '**/*.ts' },
      { pattern: 'test-app/assets/*.*', watched: false, included: false, served: true, nocache: false }
    ],


    // list of files to exclude
    exclude: [
        'node_modules/*'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '**/*.ts': [ 'karma-typescript' ]
    },

    karmaTypescriptConfig: {
        bundlerOptions: {
            entrypoints: /\.spec\.ts$/,
            transforms: [
                require("karma-typescript-angular2-transform")
            ]
        },
        compilerOptions: {
            lib: ["ES2015", "DOM"],
            sourceMap: true
        }
    },



    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','kjhtml'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    proxies: {
        '/test-data': {
            'target': 'http://ngx-current-dev.local',
            'changeOrigin': true
        }
    }
  })
}
