module.exports = function(config) {
  config.set({
    frameworks: ['browserify', 'jasmine'],
    files: [
      'src/**/*.js',
      'test/**/*_spec.js'
    ],
    preprocessors: {
      'test/**/*.js': ['jshint', 'browserify'],
      'src/**/*.js': ['jshint', 'browserify']
    },
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],
    browserify: {
      debug: true,
      bundleDelay: 2000 // Fixes "reload" error messages, YMMV!
    }
  })
}