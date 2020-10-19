const path = require("path");
module.exports = {
  entry: __dirname + "/src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname),
  },
  mode: "production",
  devServer: {
    contentBase: __dirname,
  },
  devtool: "cheap-source-map",
};
