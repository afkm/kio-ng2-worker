module.exports = {
  entry: './src/index.worker.ts',
  devtool: 'eval',
  output: {
    filename: './browser/worker.umd.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [ '.ts', '.js', '.web.js', '.webpack.js', '.json' ]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/, loader: `ts-loader?${JSON.stringify({
          configFile: 'tsconfig.worker.json'
        })}`
      }
    ]
  },
  node: {
    fs: "empty",
    child_process: "empty"
  }
}