const baseConfig = require('./config');

const config = Object.assign({}, baseConfig, {
  watch: true,
  outdir: 'dist',
});

require('esbuild')
  .build(config)
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
