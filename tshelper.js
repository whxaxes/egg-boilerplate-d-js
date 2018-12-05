module.exports = {
  watchDirs: {
    model: {
      path: 'app/model',
      caseStyle: 'upper',
      generator: 'function', // generator name
      declareTo: 'Application.model', // declare to this interface
    },

    custom: {
      path: 'app/custom',
      caseStyle: 'upper',
      generator: 'function', // generator name
      declareTo: 'Context.custom', // declare to this interface
    },
  },
};
