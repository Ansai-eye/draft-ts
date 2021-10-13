import baseConfig from './webpack.config';

const devConfig = {
  ...baseConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
  },
};

export default devConfig;
