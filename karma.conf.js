module.exports = function(config) {
  config.set({
  	// base path that will be used to resolve files and exclude
  	// this is set relative to the location of the Karma config file.
    basePath: '',

  	// Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [ 	
      'app/libs/angularjs/angular.js',
      'app/libs/angularjs/angular-mocks.js',
      //'app/js/app.module.js',
      //'app/js/app.config.js',
      //'app/js/app.config.spec.js' //,
      //'src/**/*.js',
      //'test/**/*.spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR ||
    //                  LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests
    // whenever any file changes
    autoWatch: true,

    // Continuous Integration mode
    // if true, it captures browsers, runs tests, and exits
    singleRun: false
  });
};