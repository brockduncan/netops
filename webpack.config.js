const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(ttf|woff(2)?|eot|svg|png|jpg)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    // add this for docker access
    host: "0.0.0.0"
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/index.html"
    })
  ]
};
