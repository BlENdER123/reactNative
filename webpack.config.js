const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  config.loader = {
    test: /.wasm$/,
    loaders: ['wasm-loader']
  };
  return config;
};
