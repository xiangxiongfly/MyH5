const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.jquery",
    search: "./src/search.jquery",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].jquery",
  },
};
