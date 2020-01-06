const path = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs')

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    })
  })
}

const htmlPlugins = generateHtmlPlugins('./app/html/pages');

module.exports = {
  entry: [
    './app/js/index.js',
    // './app/sass/main.sass'
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'app/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'env'
          }
        }
      },
    //   {
    //     test: /\.(sass|scss)$/,
    //     include: path.resolve(__dirname, 'app/sass'),
    //     use: ExtractTextPlugin.extract({
    //       use: [{
    //           loader: "css-loader",
    //           options: {
    //             sourceMap: true,
    //             minimize: true,
    //             url: false
    //           }
    //         },
    //         {
    //           loader: "sass-loader",
    //           options: {
    //             sourceMap: true
    //           }
    //         }
    //       ]
    //     })
    //   },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'app/html/common/**/*.html'),
        use: ['raw-loader']
      },
    ]
  },
  plugins: [
    // new ExtractTextPlugin({
    //   filename: './css/style.bundle.css',
    //   allChunks: true,
    // }),
    new CopyWebpackPlugin([{
        from: './app/fonts/**/*',
        to: './fonts/'
      },
    //   {
    //     from: './app/favicon',
    //     to: './favicon'
    //   },
      {
        from: './app/img/**/*',
        to: './img/'
      },
    //   {
    //     from: './src/uploads',
    //     to: './uploads'
    //   }
    ]),
  ].concat(htmlPlugins)
};