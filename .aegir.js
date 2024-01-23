/** @type {import('aegir').PartialOptions} */
export default {
  test: {
    files: 'test/*.spec.js',
    before: async (options) => {
      let RUNNER_ENV = options.runner;
      if (RUNNER_ENV === 'browser') {
        if (process.argv.includes('firefox')) {
          RUNNER_ENV = 'firefox';
        } else {
          RUNNER_ENV = 'chrome';
        }
      }

      return {
        env: {
          RUNNER_ENV,
        },
      };
    },
  },
};
