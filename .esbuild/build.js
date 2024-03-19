const baseConfig = require('./config');

const config = Object.assign({}, baseConfig, {
  minify: true,
  drop: ['debugger', 'console'],
});

require('esbuild')
  .build({
    ...config,
    platform: 'node', // for CJS
    outfile: 'lib/index.js',
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

require('esbuild')
  .build({
    ...config,
    platform: 'neutral', // for ESM
    format: 'esm',
    outfile: 'lib/index.esm.js',
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
