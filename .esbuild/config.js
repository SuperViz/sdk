require('dotenv').config();
const { sassPlugin } = require('esbuild-sass-plugin');

const entries = Object.entries(process.env).filter((key) => key[0].startsWith('SDK_'));
const env = Object.fromEntries(entries);

module.exports = {
  entryPoints: [
    './src/index.ts',
    './src/core/index.ts',
    './src/components/index.ts',
    './src/web-components/index.ts',
  ],
  loader: {
    '.png': 'dataurl',
    '.svg': 'dataurl',
    '.woff': 'dataurl',
    '.woff2': 'dataurl',
    '.eot': 'dataurl',
    '.ttf': 'dataurl',
  },
  plugins: [sassPlugin()],
  bundle: true,
  target: 'es6',
  format: 'esm',
  outdir: './dist',
  define: {
    'process.env': JSON.stringify(env),
  },
};
