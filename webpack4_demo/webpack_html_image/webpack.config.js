const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.jquery",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].jquery",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "img/[name].[ext]",
            esModule: false,
          },
        },
      },
      {
        test: /\.(htm|html)$/,
        loader: "html-withimg-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
};
