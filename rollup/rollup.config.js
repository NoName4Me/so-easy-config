const typescript = require('@rollup/plugin-typescript');
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd'
    },
    {
      file: 'dist/bundle.js',
      format: 'iife',
      name: 'ReactPaperUI', // the global which can be used in a browser
      plugins: [terser()]
    }
  ],
  plugins: [typescript()]
};
