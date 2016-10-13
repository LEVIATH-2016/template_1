var gulp = require('gulp');
var ejs = require("gulp-ejs");
var plumber = require("gulp-plumber");
var fs = require('fs');
var rename  = require('gulp-rename');
var prettify  = require('gulp-prettify');

// var shin = {};
// shin.DEV = "html-template/";
// shin.dist = "dist/";

var ejsPath = {
  src : "src/ejs-template",
  dist : "dist/"
}

var options = {

}

var settings = {
  ext : ".html"
}


gulp.task("ejs",function(){

 // var jsonFile = 'data/data.json';
 // var json = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
 // var pages = json.pages;


          gulp.src(
         [
           ejsPath.src +"/**/*.ejs",
           '!' + ejsPath.src + "/**/_*.ejs"
         ]
     )
    //第一引数はjson等のファイル、第二引数は、拡張子指定
     // .pipe(ejs("", {ext: ".html"}))

     // jsonファイルを読み込み
     .pipe(plumber())
     .pipe(prettify())
     .pipe(ejs(options,settings))
     .pipe(gulp.dest(ejsPath.dist));
    console.log("ejs complate");
});

gulp.task("s-watch",function(){
    gulp.watch([shin.DEV +"/**/*.ejs"],["s-ejs"]);
});