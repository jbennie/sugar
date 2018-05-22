module.exports = (config) => {
    config.set({
      files: [
        'tests/bootstrap.js',
        {
          pattern: 'tests/**/*.tests.js',
          watched: false
        },
        'tests/run.js',
        {pattern: 'tests/img/**/*', watched: false, included: false, served: true},
      ],
      browsers: ['PhantomJS'],
      frameworks: ['mocha'],
      preprocessors: {
        'tests/**/*.js': [ 'webpack' ]
      },
      webpack: {
        module: {
          rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
          }]
        }
      },
      webpackMiddleware: {
        stats: 'errors-only'
      },
      "reporters": ["mocha"],
      "port": 9876,
      "colors": true,
      "logLevel": "error",
      "autoWatch": true,
      "singleRun": true,
      "concurrency": "Infinity"
    })
  }
