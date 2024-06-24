const baseConfig = require('./config');
const esbuild = require('esbuild');

const config = Object.assign({}, baseConfig, {
  outfile: 'dist/index.js',
});

(async () => {
  try {
    const context = await esbuild.context(config);
    context.watch();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

// .build(config)
// .catch((error) => {
//   console.error(error);
//   process.exit(1);
// });
