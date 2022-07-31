const path = require('path');


module.exports = {
  entry: './dist/esm/index.js',
  devtool: 'inline-source-map',
  performance: {
      hints: false
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: 'engine.js',
    path: path.resolve(__dirname, 'dist'),
    library: "Engine"
  },
  externals: {
    yaml: {
      commonjs: 'yaml',
      commonjs2: 'yaml',
      amd: 'yaml',
      root: '_'
    }
  }
};