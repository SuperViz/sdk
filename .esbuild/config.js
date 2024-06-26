require('dotenv').config();
const { style } = require('./plugins/style-loader');

const entries = Object.entries(process.env).filter((key) => key[0].startsWith('SDK_'));
const env = Object.fromEntries(entries);

const config = {
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
  color: true,
  minify: true,
  logLevel: 'info',
  sourcemap: true,
  chunkNames: 'chunks/[name]-[hash]',
  define: {
    'process.env': JSON.stringify(env),
  },
};

module.exports = config;
