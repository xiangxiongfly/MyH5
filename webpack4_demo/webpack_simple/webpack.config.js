const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jquery",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.jquery",
  },
};
