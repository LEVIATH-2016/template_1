var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var csscomb = require("gulp-csscomb");
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var bulkSass = require('gulp-sass-bulk-import');

var sassOptions = {
	outputStyle: 'expanded',
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
    .pipe(plumber())
    .pipe(bulkSass())
    .pipe(sass(sassOptions))
    .pipe(rename(function(path){
    	
    	path.dirname = path.dirname.replace("sass","styles");
    	path.dirname = path.dirname.replace("src/",sassPath.dist);
  
    	return path 
    }))	
    .pipe(autoprefixer(prefixerOptions))
    .pipe(csscomb())
    .pipe(gulp.dest("./"))
});