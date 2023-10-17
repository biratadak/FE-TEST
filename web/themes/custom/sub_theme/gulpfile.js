var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
var sassSRC = './scss/**/*.scss';
var sassDIST = './css';

gulp.task('sass', function () {
   return gulp.src(sassSRC)
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest(sassDIST ));
});

gulp.task('sass:watch', function () {
   gulp.watch(sassSRC, gulp.series('sass'));
});
