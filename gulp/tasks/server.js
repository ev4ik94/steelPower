module.exports = function () {
    $.gulp.task("server", () =>
        $.bs.init({
            server: {
                baseDir: $.path.serverDir
            }
        })
    )
}