import baseConfig from './webpack.config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { merge } = require('webpack-merge');

const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
  },
});

export default devConfig;
