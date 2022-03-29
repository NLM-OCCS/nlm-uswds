/*
A Gulp build of USWDS
*/

const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const gulp = require("gulp");
const pkg = require("./node_modules/uswds/package.json");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

const del = require("del");
const svgSprite = require("gulp-svg-sprite");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const uswds = require("@uswds/compile");

/*
----------------------------------------
USWDS setings and global constants
----------------------------------------
*/

uswds.settings.version = 2;

// They call this a *dist*, but it is the source of *my* USWDS theming SCSS
uswds.paths.dist.theme = "./src/sass";

// CSS Destination
uswds.paths.dist.css = "./dist/css";

// Images destination
uswds.paths.dist.img = "./dist/img";

// Fonts destination
uswds.paths.dist.fonts = "./dist/fonts";

// Javascript destination
uswds.paths.dist.js = "./dist/js";

// Extra Images source location
const PROJECT_IMG_SRC = "./src/img";



/*
----------------------------------------
TASKS
----------------------------------------
*/

exports.copyFonts = uswds.copyFonts;

exports.copyImages = uswds.copyImages;

gulp.task("copyNLMImages", () => {
  return gulp.src(`${PROJECT_IMG_SRC}/**/**`).pipe(gulp.dest(uswds.paths.dist.img));
});

exports.copyJS = uswds.copyJS;

exports.copyAssets = uswds.copyAssets;

exports.copyAll = uswds.copyAll;

exports.compileSass = uswds.compileSass;

exports.compileIcons = uswds.compileIcons;

exports.build = uswds.updateUswds;

exports.compile = uswds.compile;

exports.watch = uswds.watch;

exports.defaults = uswds.watch;

function clean(cb) {
  cb();
  return del.sync("dist");
}


exports.clean = clean;

function initServe(cb) {
  browserSync.init({
    "server": {
      "baseDir": ["./examples", "./dist"],
      "index": "index.htm"
    },
    "files": [
      "./dist/css/nlm-uswds.css",
      "./examples/basic.htm",
      "./examples/alla.htm",
      "./examples/index.htm"
    ]
  });
  cb();
}

exports.serve = gulp.series(uswds.updateUswds, initServe, uswds.watch);
