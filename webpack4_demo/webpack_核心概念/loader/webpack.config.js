const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.jquery",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].jquery",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
