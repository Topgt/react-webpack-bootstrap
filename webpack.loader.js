const ExtractTextPlugin = require('extract-text-webpack-plugin');
const textPlugin1 = new ExtractTextPlugin({filename: 'bootstrap[chunkhash].css', ignoreOrder: true});
const textPlugin2 = new ExtractTextPlugin({filename: '[name][chunkhash].css', ignoreOrder: true});
module.exports = {
  loaders: [
    {
      test: /\.(js|jsx)$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loaders: ['react-hot-loader','babel-loader']
    },
    {
      test: /\.css$/,
      exclude: /app/,
      // loaders: ['style-loader', 'css-loader']
      use: textPlugin1.extract({
        use: {
          loader: 'css-loader',
          options: {
            modules: false,
          },
        },
        fallback : 'style-loader',
      })
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: textPlugin2.extract({
        use: {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        fallback : 'style-loader',
      })
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader'
    }, {
      test: /\.(woff|woff2)$/,
      loader: 'url-loader?prefix=font/&limit=5000'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.map(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    },{
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
    }
  ],
  textPlugin1: textPlugin1,
  textPlugin2: textPlugin2
};
