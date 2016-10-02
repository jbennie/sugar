
require('babel-core/register');
const _ = require('lodash');
const gulp = require('gulp');
const gulpWebpack = require('gulp-webpack');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const replace = require('gulp-replace');
const fs = require('fs');
const compass = require('gulp-compass');
const concat = require('gulp-concat');
const coffee = require('gulp-coffee');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const filter = require('gulp-filter');
const cached = require('gulp-cached');
const ts = require('gulp-typescript');
const mocha = require('gulp-mocha');
const mochaPhantom = require('gulp-mocha-phantomjs');
const named = require('vinyl-named');
const gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
const jsdocParse = require('jsdoc-parse');
const data = require('gulp-data');
const each = require('gulp-each');
const readline = require('readline');

import Handlebars from './handlebars.config'

let webpackParams = {
  resolve: {
    alias: {
      sugarcss: __dirname + '/src/js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.coffee$/,
        loader: 'coffee-loader'
      }, {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-loose', 'stage-0'],
          plugins: ['transform-proto-to-assign'],
          compact: false
        }
      }
    ]
  }
};

let webpackAppParams = _.extend({}, webpackParams, {
  entry: {},
  output: {
    path: require("path").resolve("./assets/js"),
    filename: '[name].js',
    libraryTarget: 'umd'
  }
});

let webpackDistParams = _.extend({}, webpackParams, {
  output: {
    path: require("path").resolve("./dist/js"),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  }
});

if (process.env.NODE_ENV === 'debug') {
  webpackParams.devtool = "#inline-source-map";
}

gulp.task('tokens', function() {
  var drawers_content, footer_content, head_content, topbar_content;
  topbar_content = fs.readFileSync("pages/parts/top-bar.php", "utf8");
  drawers_content = fs.readFileSync("pages/parts/drawers.php", "utf8");
  head_content = fs.readFileSync("pages/parts/head.php", "utf8");
  footer_content = fs.readFileSync("pages/parts/footer.php", "utf8");
  return gulp.src(['pages/*.php']).pipe(replace('{HEAD}', head_content)).pipe(replace('{FOOTER}', footer_content)).pipe(replace('{TOPBAR}', topbar_content)).pipe(replace('{DRAWERS}', drawers_content)).pipe(gulp.dest('./'));
});

gulp.task('clean-js', function() {
  return gulp.src(['dist/js/', 'assets/js']).pipe(clean());
});

gulp.task('clean-css', function() {
  return gulp.src(['dist/css/', 'assets/css']).pipe(clean());
});

const parseJsDoc = function(file, cb) {
    let res = [];
    let data = {};
    let inBlock = false;
    let currentName = null;
    let currentValue = [];
    let lineReader = readline.createInterface({
      input: fs.createReadStream(file.path)
    });
    lineReader.on('line', function(line) {
      let name, split;
      if (line.trim() === '/**') {
        data = {};
        inBlock = true;
        return;
      } else if (line.trim() === '*/') {
        res.push(data);
        inBlock = false;
        currentName = null;
        currentValue = [];
        return;
      }
      if (!inBlock) {
        return;
      }

	  // process line
	  line = line.trim().substr(1).trim().replace(/\t/g, ' ');

	  // boolean tags
	  ['constructor', 'deprecated', 'private', 'public', 'protected', 'override', 'interface', 'inheritDoc', 'nosideeffects', 'setting', 'const', 'expose'].forEach(function(what) {
        if (line.match('@' + what)) {
          data[what] = true;
        }
      });

	  // get the name
      name = line.split(/\s+/)[0];
      if (currentName && currentValue.length && name.substr(0, 1) === '@') {
        if (currentValue[currentValue.length-1] === '') {
            currentValue.pop();
        }
        data[currentName] = currentValue.join("\n");
        currentValue = [];
        currentName = null;
      }
      if (name.substr(0, 1) === '@' && line.split(/\s+/).length === 1) {
        currentName = name.substr(1);
        return;
      } else if (currentName && name.substr(0, 1) !== '@') {
        currentValue.push(line);
        return;
      } else if (name.substr(0, 1) !== '@') {
        currentName = 'description';
        currentValue = [];
        currentValue.push(line);
        return;
      }

	  // one param tags
      ['name', 'class', 'extends', 'type', 'implements', 'this', 'lang', 'default'].forEach(function(what) {
        var value;
        if (line.match('@' + what)) {
          value = line.split(/\s+/)[1];
          value = value.replace('{', '').replace('}', '');
          data[what] = value;
        }
      });

	  // return
      if (line.match('@return')) {
        let split = line.split(/\s+/);
        data['return'] = {
          type: split[1].replace('{', '').replace('}', ''),
          description: split[2] !== void 0 ? split[2] : null
        };
        return;
      }

	  // params
      if (line.match('@param')) {
        if (!data['params']) {
          data['params'] = [];
        }
        let split = line.split(/\s+/);
        let name = split[2];
        let def = null;
        if (name.substr(0,1) === '[' && name.substr(-1) === ']') {
            const defSplit = name.substr(1,name.length-2).split('=');
            def = defSplit[1];
            name = defSplit[0];
        }

        let p = {
          name: name,
          type: split[1].replace('{','').replace('}',''),
          description: split[2] !== void 0 ? split[3] : null
        };
        if (def) {
            p.default = def;
            p.optional = true;
        } else {
            p.optional = false;
        }

        return data['params'].push(p);
      }
    });
    lineReader.on('close', function() {
      return cb(res);
    });
};

gulp.task('markdown-js-api', function() {
    gulp.src('./src/js/classes/*.js')
    .pipe(each(function(content, file, cb) {
        parseJsDoc(file, function(json) {
            let source = fs.readFileSync('./template.hbs', 'utf8');
            let template = Handlebars.compile(source);
            let result = template({
                data : json
            });
            cb(null, result.replace(/&#x60;/g,'`'));
        });
    }))
    .pipe(rename((path) => {
        path.extname = '.md';
    }))
    .pipe(gulp.dest('doc/api/js'));
});

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss').pipe(sass({
    outputStyle: 'expanded',
    precision: 8
  }).on('error', sass.logError)).pipe(autoprefixer({
    browsers: ['last 5 versions']
  })).pipe(gulp.dest('assets/css'));
});

gulp.task('webpack-dist', ['clean-js'], function() {
  return gulp.src(['./src/components/**/*.js']).pipe(gulpWebpack(webpackDistParams)).pipe(gulp.dest('dist/js')).pipe(uglify()).pipe(rename({
    extname: '.min.js'
  })).pipe(gulp.dest('dist/js'));
});

gulp.task('webpack-app', ['clean-js'], function() {
  return gulp.src(['./src/js/demo/*.js']).pipe(gulpWebpack(webpackAppParams)).pipe(gulp.dest('assets/js')).pipe(uglify()).pipe(rename({
    extname: '.min.js'
  })).pipe(gulp.dest('assets/js'));
});

gulp.task('tests-js-compile', [], function() {
  return gulp.src('tests/phantomjs/src/**/*.js').pipe(named()).pipe(gulpWebpack(webpackParams)).pipe(gulp.dest('tests/phantomjs/js'));
});

gulp.task('tests', ['tests-js-compile'], function() {
  return gulp.src('tests/phantomjs/*.html').pipe(mochaPhantom());
});

gulp.task('default', ['webpack-app', 'sass']);

gulp.task('watch', ['default'], function() {
  gulp.watch(['src/js/**/*.js'], ['webpack-app']);
  gulp.watch(["src/sass/**/*.scss"], ['sass']);
  gulp.watch(['pages/**/*.php'], ['tokens']);
  return gulp.watch(['tests/phantomjs/src/**/*.js'], ['tests']);
});

// ---
// generated by coffee-script 1.9.2
