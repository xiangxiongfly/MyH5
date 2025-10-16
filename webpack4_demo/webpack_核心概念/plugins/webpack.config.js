const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.jquery",
    search: "./src/search.jquery",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].jquery",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: ["index"],
      minify: {
        // 删除html中的注释
        removeComments: true,
        // 删除html中空格
        collapseWhitespace: true,
        // 删除html中的属性值双引号
        removeAttributeQuotes: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./search.html",
      filename: "search.html",
      chunks: ["search"],
    }),
  ],
};
