import * as webpack from 'webpack';
import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const RootPath = path.join(process.cwd());
const AppPath = path.join(RootPath, '/src');

const config: webpack.Configuration = {
  entry: path.join(AppPath, 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
    publicPath: '/',
    environment: {
      arrowFunction: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(?:js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: [
            [
              'import',
              {
                libraryName: 'antd',
                style: 'css',
              },
            ],
          ],
        },
      },
      {
        //设置less文件处理
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          //引入postcss
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions',
                      stage: 3,
                    },
                  ],
                ],
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(eot|woff|ttf|woff2|svg|gif|png|jpg)(\?|$)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path]/[name].[hash:8].[ext]',
            outputPath: './static/assets',
          },
        },
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    alias: {
      '@': `${AppPath}`,
    },
  },
};

export default config;
