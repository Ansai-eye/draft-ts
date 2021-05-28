const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');;

module.exports = {
  entry: './src/indexHello',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ],
          plugins: [
            ['import',{
              libraryName: 'antd',
              style: 'css'
            }]
          ]
        },
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