require('dotenv').config();
const entries = Object.entries(process.env).filter((key) => key[0].startsWith('SDK_'));
const env = Object.fromEntries(entries);

module.exports = {
  entryPoints: [
    './src/index.ts',
    './src/core/index.ts',
    './src/components/index.ts',
    './src/web-components/index.ts',
  ],
  bundle: true,
  target: 'es6',
  format: 'esm',
  outdir: './dist',
  define: {
    'process.env': JSON.stringify(env),
  },
};
