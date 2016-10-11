var gulp       = require('gulp');
var requireDir = require('require-dir');
var dir        = requireDir('./gulp');

gulp.task('default',function(){
	gulp.watch("**/*.scss",["sass"]);
});