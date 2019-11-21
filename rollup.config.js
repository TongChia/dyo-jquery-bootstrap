import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import path from 'path';

export default {
  inlineDynamicImports: false,
  input: 'src/main.js',
  output: {
    format: 'amd',
    sourcemap: true,
    sourcemapPathTransform: _path => path.relative('src', _path),
  },
  external: ['jquery', 'bootstrap'],
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: /\/node_modules\/(@babel|core-js)/
    }),
    replace({
      'process.browser': true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    resolve({browser: true}),
    commonjs({include: /node_modules/}),
    postcss({
      modules: true,
      extract: true
    }),
  ],
}
