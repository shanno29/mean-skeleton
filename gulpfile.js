const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpack_config = require('./webpack.config');
const eslint = require('gulp-eslint');
const sasslint = require('gulp-sass-lint');


/* Utils */
gulp.task('clean', () => {
  return del(['public/**/*', '!public/index.html']);
});

/* Webpack */
gulp.task('webpack:prod', ['clean', 'lint:client', 'sasslint'], (callback) => {
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
});
gulp.task('webpack:dev', ['clean', 'lint:client', 'sasslint'], (callback) => {
  webpack_config.devtool = 'cheap-module-eval-source-map';
  return gulp.src('app/app.jsx')
    .pipe(webpackStream(webpack_config))
    .pipe(gulp.dest('./'));
});
gulp.task('webpack:watch', ['webpack:dev'], () => {
  gulp.watch(['app/**/*.jsx', 'app/**/*.js', 'app/sass/**/*.scss'], ['webpack:dev']);
});

/* Linting */
gulp.task('eslint:client', () => {
  return gulp.src(['app/**/*.jsx', 'app/**/*.js'])
    .pipe(eslint({ configFile: './.eslintrc.client.js' }))
    .pipe(eslint.format());
    //.pipe(eslint.failAfterError());
});
gulp.task('eslint:server', () => {
  return gulp.src(['test/**/*.js', 'routes/**/*.js', 'bin/www', 'app.js', 'config/**/*.js'])
    .pipe(eslint({ configFile: './.eslintrc.server.js' }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
gulp.task('sasslint', () => {
  return gulp.src(['app/sass/**/*.scss'])
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
});
gulp.task('htmllint', () => {
  // TODO
});
gulp.task('lint:client', ['eslint:client', 'sasslint']);
gulp.task('lint:server', ['eslint:server']);
gulp.task('lint', ['lint:client', 'lint:server']);

/* Travis */
gulp.task('travis', ['lint']);

/* Convenience tasks */
gulp.task('client', ['webpack:dev']);
gulp.task('server', ['lint:server']);
gulp.task('watch', ['webpack:watch']);
gulp.task('production', ['clean', 'lint', 'webpack:prod']);
gulp.task('default', ['clean', 'lint', 'webpack:dev']);
