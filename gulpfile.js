var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.sass')
    	.pipe(sass())
     	.pipe(gulp.dest('app/dist/css'))
});

gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'app/js/script.js'])
        .pipe(gulp.dest("app/dist/js"));
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('build',['clean', 'sass'], function() {
    var buildCss = gulp.src(
    	'app/css/main.css')
      .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('app/js/**/*')
      .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'js']);