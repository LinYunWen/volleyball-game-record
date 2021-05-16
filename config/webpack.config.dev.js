const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve("./src/index.js"),
  },
  output: {
    path: path.resolve("./build"),
    filename: "[name].js",
    // publicPath: path.resolve('./build/public')
  },
  target: "web",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    inline: true,
    port: 8081,
    open: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  resolveLoader: {
    modules: ["node_modules", "build-tools/js-loaders"],
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html?$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: "file-loader",
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  optimization: {
    // concatenateModules: false,
    minimizer: [],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.BannerPlugin({
      banner: "/*!! Dcard reader © Lin Yun Wen */",
      raw: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
