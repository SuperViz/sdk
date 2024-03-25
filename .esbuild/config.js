require('dotenv').config();
const { style } = require('./plugins/style-loader');
const { dependencies } = require('../package.json');

const entries = Object.entries(process.env).filter((key) => key[0].startsWith('SDK_'));
const env = Object.fromEntries(entries);

module.exports = {
  entryPoints: ['./src/index.ts'],
  loader: {
    '.png': 'file',
    '.svg': 'file',
    '.woff': 'file',
    '.woff2': 'file',
    '.eot': 'file',
    '.ttf': 'file',
  },
  plugins: [style()],
  bundle: true,
  target: 'es6',
  format: 'esm',
  external: Object.keys(dependencies),
  define: {
    'process.env': JSON.stringify(env),
  },
};
