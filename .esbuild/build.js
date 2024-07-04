const { cjsConfig, esmConfig } = require('./config');
const esbuild = require('esbuild');

(async () => {
  try {
    await Promise.all([
      esbuild.build({
        ...cjsConfig,
        outfile: 'lib/index.cjs.js',
      }),

      esbuild.build({
        ...esmConfig,
        outdir: 'lib',
      }),
    ]);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
