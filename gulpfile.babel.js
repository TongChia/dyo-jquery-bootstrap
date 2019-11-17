import gulp from 'gulp';
import rvs2 from 'rollup-vinyl-stream2';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import rollupConfig from './rollup.config';

export function build () {
  return rvs2(rollupConfig)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/assets'))
}

export function serve () {
  const bs = browserSync.create('dev server');
  const rebuild = () => build().pipe(bs.stream())

  bs.init({
    server: {
      baseDir: 'public',
      routes: {
          '/node_modules': 'node_modules'
      }
    },
    ui: false,
    single: true,
    port: 9000,
  })

  return gulp.watch('src/**/*', rebuild);
}

export default gulp.series(build, serve);
