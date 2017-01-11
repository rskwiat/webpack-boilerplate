process.env.NODE_ENV = 'development';

const port = 4444;
const chalk = require('chalk');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.config');

const compiler = webpack(config);

compiler.run((err, stats) => {
  console.log(chalk.green('Compiling JavaScript...'));
  if (err) {
    console.log(chalk.red(err));
  } else {
    const assets = stats.toJson().assets;
    assets.forEach((entry) => {
      console.log(chalk.green('JavaScript saved!'));
      console.log(chalk.yellow('File Name: ') + entry.name);
    });
  }
});

//Work in progress
//Hot loading is not currently working

/*

var server = new webpackDevServer(compiler, {
  contentBase: 'public',
  publicPath: 'public',
  quiet: true,
  hot: true
});
server.listen(port);

*/
