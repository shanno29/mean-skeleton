const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpack_config = require('./webpack.config');
const eslint = require('gulp-eslint');
const sasslint = require('gulp-sass-lint');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const filelog = require('gulp-filelog');
require('dotenv').config();

/* Utilities */
function clean() {
	return del(['public/**/*', '!public/index.html']);
}

/* Linting */
function lint_client_js() {
	return gulp.src(['app/**/*.jsx', 'app/**/*.js'], {read: false})
    .pipe(eslint({ configFile: './.eslintrc.client.js' }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function lint_client_scss() {
	return gulp.src(['app/**/*.scss'], {read: false})
		.pipe(sasslint())
		.pipe(sasslint.format())
		.pipe(sasslint.failOnError());
}

function lint_server_js() {
	return gulp.src(['index.js', 'server.js', 'config/**/*.js', 'lib/**/*.js'], {read: false})
		//.pipe(filelog())
		.pipe(eslint({ configFile: './.eslintrc.server.js' }))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}

function lint_html(done) {
	// TODO
	done();
}

/* Karma/Testing */
function test_client(done) {
	// TODO
	done();
}

function test_server() {
	return gulp.src(['lib/**/*.js'])
		.pipe(istanbul({includeUntested: true}))
		.pipe(istanbul.hookRequire())
		.on('end', function() {
			gulp.src([ 'test/mocha_setup.js', '**/.test.js', '**/*.test.js', '!node_modules/**/*'])
				// .pipe(filelog())
				.pipe(mocha({
					// TODO: Separate these, integration tests should go to supersamples, unit tests to mochawesome.
					reporter: 'mochawesome',
					// reporter: 'supersamples',
					bail: false,
				}))
				.pipe(istanbul.writeReports({reporters: ['html', 'text-summary']}));
				// Enforce coverage of at least 90%
				// .pipe(istanbul.enforceThresholds({thresholds: {global: 90}}));
		});
}

/* Webpack */
function webpack_build_prod() {
	webpack_config.devtool = 'cheap-module-source-map';
  webpack_config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  );
  return gulp.src('app/app.jsx')
    .pipe(webpackStream(webpack_config))
    .pipe(gulp.dest('./'));
}

function webpack_build_dev() {
  webpack_config.devtool = 'cheap-module-eval-source-map';
  return gulp.src('app/app.jsx')
    .pipe(webpackStream(webpack_config))
    .pipe(gulp.dest('./'));
}

function webpack_watch() {
	gulp.watch(['app/**/*.jsx', 'app/**/*.js', 'app/sass/**/*.scss'], ['webpack:dev']);
}

// Tasks - Utilities
gulp.task('clean', clean);

// Tasks - Linting
gulp.task('lint:server:js', lint_server_js);
gulp.task('lint:client:html', lint_html);
gulp.task('lint:client:js', lint_client_js);
gulp.task('lint:client:scss', lint_client_scss);

let lint_server = gulp.parallel(lint_server_js);
gulp.task('lint:server', lint_server);
let lint_client = gulp.parallel(lint_html, lint_client_js, lint_client_scss);
gulp.task('lint:client', lint_client);

let lint = gulp.parallel(lint_server, lint_client);
gulp.task('lint', lint);

// Tasks - Testing
gulp.task('test:server', test_server);
gulp.task('test:client', test_client);

let test = gulp.series(test_server, test_client);
gulp.task('test', test);

// Tasks - Webpack
let webpack_dev = gulp.series(clean, webpack_build_dev);
gulp.task('webpack:build:dev', gulp.series(clean, webpack_build_dev));
let webpack_prod = gulp.series(clean, webpack_build_prod);
gulp.task('webpack:build:prod', gulp.series(clean, webpack_build_prod));
let watch = gulp.series(clean, webpack_dev, webpack_watch);
gulp.task('webpack:watch', watch);

// Tasks - Composites
gulp.task('travis', gulp.series(lint, test));

gulp.task('server', gulp.series(lint_server, test_server));
gulp.task('client', gulp.series(lint_client, test_client, webpack_dev));

gulp.task('watch', watch);

gulp.task('develop', gulp.series(lint, test, webpack_dev));
gulp.task('production', gulp.series(lint, test, webpack_prod));

gulp.task('default', gulp.series(lint, test, webpack_dev));