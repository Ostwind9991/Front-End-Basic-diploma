const gulp = require('gulp'),
    sass = require('gulp-sass'),
    fileinclude = require('gulp-file-include'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    browserSync = require('browser-sync');

gulp.task('sass', function(){
    return gulp.src("./src/assets/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('fileinclude', function() {
    return gulp.src([
        './src/pages/about_us/about_us.html',
        './src/pages/services/services.html',
        './src/pages/service_page/service_page.html',
        './src/pages/teamPage/teamPage.html',
        './src/pages/team/team.html',
        './src/pages/blog/blog.html',
        './src/pages/post/post.html',
        './src/pages/contact/contact.html',
        './src/pages/homepage/index.html'
    ]).pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist'));
});


gulp.task('copy',function(){
    return gulp.src('./src/assets/icons/**/*.{svg,png,jpg}')
        .pipe(gulp.dest('./dist/icons'))
});

gulp.task('copyjs',function(){
    return gulp.src('./src/assets/js/**/*.js')
        .pipe(gulp.dest('./dist/js'))
});
gulp.task('copyfonts',function(){
    return gulp.src('./src/assets/fonts/**/*.{ttf,woff}')
        .pipe(gulp.dest('./dist/fonts'))
});

gulp.task("watch", function(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        }
    })

    gulp.watch("./src/**/*.scss", gulp.series('sass'));
    gulp.watch("./src/pages/**/*.html").on('change', gulp.series('fileinclude'));
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('copy', 'sass','fileinclude', 'copyjs', 'copyfonts', 'watch'));
