const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")
const Dotenv = require("dotenv-webpack");

const webpackEnv = process.env.WEBPACK_ENV
const isEnvDevelopment = webpackEnv === 'development'
const isEnvProduction = webpackEnv === 'production'

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: ""
  },
  module: {
    rules: [
      // babel
      {
        test: /\.(js)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      // style and css extract
      {
        test: [/.css$|.scss$/],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              require('autoprefixer')()
            ],
          }
        }]
      },
      //image file loader
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/img/",
              // publicPath: '../img/'
            }
          }
        ]
      },
      //fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/',
            // publicPath: '../fonts'
          }
        }]
      }]
  },
  mode: webpackEnv,
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new GoogleFontsPlugin({
      fonts: [
        { family: "EB Garamond" },
        { family: "Open Sans" }
      ]
    }),
    new Dotenv()
  ],
  optimization: {
    minimize: isEnvProduction,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin()
    ],
  }
};
