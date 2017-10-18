const BundleInspector = require('bundle-inspector-webpack-plugin');

module.exports = {
  entry: './src/index.client.ts',
  devtool: 'eval',
  output: {
    filename: './browser/client.umd.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [ '.ts', '.js', '.web.js', '.webpack.js' ]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/, loader: `ts-loader?${JSON.stringify({
          configFile: 'tsconfig.client.json'
        })}`
      }
    ]
  },
  node: {
    fs: "empty",
    child_process: "empty"
  },

  plugins: [new BundleInspector()]

}