import config from './rollup.config.dev';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

config.output = {
  name: 'vue-a11y-tachyons',
  file: 'dist/vue-a11y-tachyons.min.js',
  format: 'umd',
  sourcemap: false
};

config.plugins.push(uglify({}, minify));

export default config;
