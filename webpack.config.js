const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  stats: {
    children: true,
  },
  mode: 'none',
  // https://webpack.js.org/configuration/entry-context/#entry
  // entry: path.join(__dirname, "src", "index.js"),
  // what is __dirname https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname 
  // https://www.w3schools.com/nodejs/met_path_join.asp

  // Where will send the files.. more https://webpack.js.org/concepts/output/
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: 'index.bundle.js',
  },
  // dev server config
  // devServer: {
  //   port:3010,
  //   watchContentBase: true,
  // },
  // https://webpack.js.org/configuration/module/#rule
  // 1. test with js or jsx extensions
  // 2. exclude node_modules folder
  // 3. handle both js and sass files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        exclude: ['/UI/Button/Button.module.css'],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },

  plugins: [
    // https://webpack.js.org/plugins/html-webpack-plugin/  
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}