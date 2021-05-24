global.$ = {
    gulp: require("gulp"),
    dest: require("gulp"),
    gp: require("gulp-load-plugins")(),
    bs: require("browser-sync").create(),
    path: {
        serverDir: "./app/build/",
        build: {
            html: "./app/build/",
            style: "./app/build/css/",
            js: "./app/build/js/",
            img: "./app/build/img/",
            fonts: "./app/build/fonts/",
        },
        src: {
            html: "./app/src/*.{html,pug,jade}",
            style: "./app/src/scss/**/*.*",
            img: "./app/src/img/**/*.{png,jpg,svg,gif}", // **- любая папк; {...} - расширение только этих форматов
            fonts: "./app/src/fonts/**/**/*.*",
            js: "./app/src/js/*.js"
        },
        watch: {
            html: ["./app/src/*.{html,pug,jade}", "./app/src/view/**/*.{html,pug,jade}"],
            style: "./app/src/scss/**/*.*",
            js: "./app/src/js/**/*.js",
            img: "./app/src/img/**/*.{png,jpg,svg,gif}",
            fonts: "./app/src/fonts/**/**/*.*"
        },
        tasks: require("./gulp")
    },
    tasksList: {
        build: ["html", "style", "js", "img", "fonts"],
        default: ["html", "style", "js", "img", "fonts", "watch", "server"]
    }
}
$.path.tasks.forEach((b)=>{
    if (typeof require(b) == "function") {
        return require(b)();
    }
})

// console.log($.path.tasks);

$.gulp.task("build", $.gulp.parallel($.tasksList.build))
$.gulp.task("default", $.gulp.parallel($.tasksList.default))
