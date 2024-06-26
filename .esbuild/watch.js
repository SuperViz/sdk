const config = require('./config');
const esbuild = require('esbuild');

(async () => {
  try {
    const [cjsContext, esmContext] = await Promise.all([
      esbuild.context({
        ...config,
        format: 'cjs',
        outdir: 'dist',
        outExtension: { '.js': '.cjs' },
      }),

      esbuild.context({
        ...config,
        format: 'esm',
        outdir: 'dist',
        splitting: true,
      }),
    ]);

    cjsContext.watch();
    esmContext.watch();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
