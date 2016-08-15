const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const babelify = require("babelify");

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        extensions : [".js"],
        debug: true
    }).transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html","app/lib/bootstrap-css/css/bootstrap.min.css","app/style.css"])
        .pipe(gulp.dest("app/dist"));
});

gulp.task("default",["copy"],function(){
   console.log("Gulp completed..."); 
});
