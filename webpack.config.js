const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');;

const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-0', 'stage-3'],
            plugins: [
              'transform-decorators-legacy',
              ['import', { libraryName: 'antd', style: 'css' }], // `style: true` 会加载 less 文件
            ],
          },
        },
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory([
              {
                libraryName: 'antd',
                libraryDirectory: 'lib',
                style: 'css'
              }
            ])]
          })
        },
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        //设置less文件处理
        test: /\.less$/,
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
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(eot|woff|ttf|woff2|svg|gif|png|jpg)(\?|$)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[folder]/[name].[hash:8].[ext]',
            outputPath: './static/assets'
          }
        }
      },
      {
        test: /\.md$/,
        use: "raw-loader"
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  }
};