require('dotenv').config();
const { style } = require('./plugins/style-loader');
const glob = require('glob');

const entries = Object.entries(process.env).filter((key) => key[0].startsWith('SDK_'));
const env = Object.fromEntries(entries);
const entryPoints = glob
  .sync('./src/**/*.ts')
  .filter((file) => !file.endsWith('.d.ts') && !file.endsWith('.test.ts'));

const config = {
  entryPoints,
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
  color: true,
  minify: false,
  logLevel: 'info',
  sourcemap: true,
  chunkNames: 'chunks/[name]-[hash]',
  define: {
    'process.env': JSON.stringify(env),
  },
};

module.exports = config;
