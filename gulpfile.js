const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

function styles() {
    return gulp.src("./frontend/scss/pages/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./app/static/css"));
}

function watch() {
    gulp.watch("./frontend/scss/**/*.scss", styles);
}

exports.watch = watch;
