const baseConfig = require('./config');

const config = Object.assign({}, baseConfig, {
  watch: true,
});

require('esbuild')
  .build(config)
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
