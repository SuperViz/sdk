const baseConfig = require('./config');

const config = Object.assign({}, baseConfig, {
  watch: true,
});

require('esbuild')
  .build({
    ...config,
    platform: 'node', // for CJS
    outfile: 'dist/index.js',
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

require('esbuild')
  .build({
    ...config,
    format: 'esm',
    outfile: 'dist/index.esm.js',
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
