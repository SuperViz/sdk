const baseConfig = require('./config');

const config = Object.assign({}, baseConfig, {
  watch: true,
});

require('esbuild')
  .build({
    ...config,
    outfile: 'dist/index.js',
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
