var gulp       = require('gulp');
var requireDir = require('require-dir');
var dir        = requireDir('./gulp');

var ejsPath = {
  src : "src/ejs-template",
  dist : "dist/"
}

gulp.task('default',function(){
	gulp.watch("**/*.scss",["sass"]);
	gulp.watch([ejsPath.src +"/**/*.ejs"],["ejs"]);
});