/**
 * @param {Egg.EggAppInfo} appInfo
 */
module.exports = appInfo => {
  /** @type {Egg.EggAppConfig} */
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543991101115_6311';

  // add your config here
  config.middleware = [];

  return {
    ...config,

    biz: {
      test: '123',
    },
  };
};
