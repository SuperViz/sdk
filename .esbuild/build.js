const config = require('./config');
const esbuild = require('esbuild');

(async () => {
  try {
    await Promise.all([
      esbuild.build({
        ...config,
        format: 'cjs',
        outdir: 'lib',
        outExtension: { '.js': '.cjs' },
      }),

      esbuild.build({
        ...config,
        format: 'esm',
        outdir: 'lib',
        splitting: true,
      }),
    ]);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
