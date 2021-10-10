import path from 'path';
import babel from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";
import autoprefixer from 'autoprefixer';
import { eslint } from 'rollup-plugin-eslint';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const extensions = ['.js', '.jsx'];
const isDevelopment = (process.env.BUILD !== 'prod');

export default {
  input: path.resolve(__dirname, 'src/script.js'),
  output: {
    dir: path.resolve(__dirname, 'public'),
    entryFileNames: 'js/[name].js',
    format: "iife",
    sourcemap: !isDevelopment
  },
  context: 'this',
  plugins: [
    image(),
    svgr(),
    !isDevelopment && terser(),
    postcss({
      extensions: ['.css', '.scss'],
      minimize: !isDevelopment,
      sourceMap: !isDevelopment,
      plugins: [
        autoprefixer
      ],
      extract: path.relative(__dirname, 'css/style.css')
    }),
    resolve({
      mainFields: ['module', 'main', 'jsnext:main', 'browser'],
      extensions
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.BUILD),
      preventAssignment: true
    }),
    babel({
      presets: ['@babel/preset-react'],
      exclude: /node_modules/,
      babelHelpers: 'bundled'
    }),
    commonjs(),
    isDevelopment && eslint(),
    isDevelopment && serve({
      open: true,
      verbose: true,
      historyApiFallback: true,
      contentBase: ['', 'public'],
      port: 3030
    }),
    isDevelopment && livereload({ watch: 'src' })
  ]
};