var gulp = require("gulp"),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');


gulp.task('webserver', function(){
  connect.server({
    livereload: true
  });
});

gulp.task('sass', function(){
  gulp.src('./src/scss/main.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('./dist'))
      .pipe(livereload());
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('./src/scss/main.scss',['sass']);
});





gulp.task('default', ['webserver', 'sass', 'watch']);
