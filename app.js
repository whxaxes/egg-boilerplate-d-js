const path = require('path');

/**
 * @param {import('egg').Application} app - egg application
 */
module.exports = app => {
  // load model to app
  let directory = path.resolve(app.baseDir, './app/model');
  app.loader.loadToApp(directory, 'model', {
    caseStyle: 'upper',
    directory,
  });

  // load custom to context
  directory = path.resolve(app.baseDir, './app/custom');
  app.loader.loadToContext(directory, 'custom', {
    caseStyle: 'upper',
    directory,
  });
};
