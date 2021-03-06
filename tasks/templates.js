import gulp from 'gulp';
import plumber from 'gulp-plumber';
import fileinclude from 'gulp-file-include';

gulp.task('templates', () => (
	gulp.src('app/pages/*.html')
		.pipe(plumber())
		.pipe(fileinclude({
			prefix: '@@',
			basepath: 'app' // '@file', '@root'
		}))
		.pipe(gulp.dest('dist/'))
));
