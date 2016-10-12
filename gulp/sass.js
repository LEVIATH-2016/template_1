var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var csscomb = require("gulp-csscomb");
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');

var sassOptions = {
	outputStyle: 'compressed',
    sourceMap: true,
    sourceComments: false
}

var prefixerOptions = {
	browsers: ['Android 4.0']
}

var sassPath = {
	dist : "dist/"
}

gulp.task("sass", function() {
    gulp.src(["**/*.scss","!./node_modules/**"])
    .pipe(rename(function(path){
    	
    	path.dirname = path.dirname.replace("sass","styles");
    	path.dirname = path.dirname.replace("src/",sassPath.dist);
  
    	return path 
    }))
    	.pipe(plumber())
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(prefixerOptions))
        .pipe(csscomb())
        .pipe(gulp.dest("./"))
});