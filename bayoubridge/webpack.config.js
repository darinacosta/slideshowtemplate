var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + "/app",
  module: {
    loaders: [
      //{ loader: "css-loader", options: { url: false } },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?url=false"
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!less-loader?url=false"
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url"
      },
      {
        test: /\.modernizrrc.js$/,
        use: ["modernizr-loader"]
      },
      {
        test: /\.modernizrrc(\.json)?$/,
        use: ["modernizr-loader", "json-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [__dirname + "/node_modules", "lib"],
    alias: {
      modernizr$: path.resolve(__dirname, ".modernizrrc"),
      fittext: "lib/jquery.fittext.js"
    }
  },
  entry: {
    app: "./app.js",
    style: "./style.js",
    vendor: ["jquery", "bootstrap", "fullpage.js"]
  },
  output: {
    path: __dirname + "/app/assets/builds",
    publicPath: "/app/assets/builds",
    filename: "[name].bundle.js"
  },
  devServer: {
    compress: true,
    port: 8070
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.bundle.js"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      tether: "tether",
      Tether: "tether",
      "window.Tether": "tether"
    }),
    new ExtractTextPlugin("./bundle.css")
  ]
};
