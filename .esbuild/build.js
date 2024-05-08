const baseConfig = require('./config');

const config = Object.assign({}, baseConfig, {
  minify: true,
  drop: ['debugger', 'console'],
});

require('esbuild')
  .build({
    ...config,
    outfile: 'lib/index.js',
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
