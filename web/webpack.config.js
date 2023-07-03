const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname, '../src');

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.(js|jsx)$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.web.tsx'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, '../node_modules/react-native-uncompiled'),
    path.resolve(appDirectory, '../node_modules/react-native-animatable'),
    path.resolve(appDirectory, '../public/assets'),
  ],
  exclude: /node_modules\/(?!(react-native-animatable)\/).*/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      presets: ['module:metro-react-native-babel-preset'],
      // Re-write paths to import only the modules needed by the app
      plugins: ['react-native-web'],
    },
  },
};

const typescriptLoaderConfiguration = {
  test: /\.ts?|\.tsx$/,
  use: {
    loader: 'ts-loader',
  },
  exclude: /node_modules/,
};

// webpack fonts ttf
const ttfLoaderConfiguration = {
  test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  exclude: [/node_modules/],
  type: 'javascript/auto',
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      publicPath: '../assets/fonts/',
      esModule: false,
    },
  },
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      esModule: false,
    },
  },
};

// webpack css loader
const cssLoaderConfiguration = {
  test: /\.(c)ss$/,
  use: ['style-loader', 'css-loader'],
};

module.exports = {
  cache: true,
  mode: 'development',
  entry: [
    // load any web API polyfills
    // path.resolve(appDirectory, 'polyfills-web.js'),
    // your web-specific entry file
    path.resolve(appDirectory, 'index.web.tsx'),
  ],

  // configures where the build ends up
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist'),
  },

  devtool: 'source-map',

  devServer: {
    compress: true,
    port: 9000,
    allowedHosts: 'all',
  },

  module: {
    rules: [
      babelLoaderConfiguration,
      typescriptLoaderConfiguration,
      imageLoaderConfiguration,
      cssLoaderConfiguration,
      ttfLoaderConfiguration,
    ],
  },

  resolve: {
    // This will only alias the exact import "react-native"
    alias: {
      'react-native$': 'react-native-web',
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [
      '*',
      '.web.js',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.web.tsx',
      '.web.ts',
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '/public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
      __DEV__: process.env.NODE_ENV !== 'production' || true,
    }),
  ],
};
