// eslint ignore-next-line
exports.onCreateWebpackConfig = ({ _actions, _loaders, getConfig }) => {
  const config = getConfig();
  config.node = {
    fs: 'empty',
  };
};
