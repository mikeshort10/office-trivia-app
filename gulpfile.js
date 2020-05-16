// @ts-check
const gulp = require("gulp");
const postcss = require("gulp-postcss");

gulp.task("build_css", () => {
  return gulp
    .src("public/dev/**/*.css")
    .pipe(postcss([require("tailwindcss"), require("autoprefixer")]))
    .pipe(gulp.dest("public/"));
});

gulp.task("watch_css", () => {
  gulp.watch("public/dev/**/*.css", gulp.series("build_css"));
  gulp.watch("tailwind.config.js", gulp.series("build_css"));
});
