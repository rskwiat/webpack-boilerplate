process.env.NODE_ENV = 'dev';

const port = 4444;
const ip = '127.0.0.1';

const chalk = require('chalk');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.config');

const compiler = webpack(config);



// if (process.env.NODE_ENV == 'prod') {
//
//   compiler.run((err, stats) => {
//     console.log(chalk.green('Compiling JavaScript...'));
//     if (err) {
//       console.log(chalk.red(err));
//     } else {
//       const assets = stats.toJson().assets;
//       assets.forEach((entry) => {
//         console.log(chalk.green('JavaScript saved!'));
//         console.log(chalk.yellow('File Name: ') + entry.name);
//       });
//     }
//   });
//
// } else {

  new webpackDevServer(compiler, {
    contentBase: './public',
    publicPath: './public',
    hot: true,
    inline: true,
    historyApiFallback: true
  }).listen(port, ip, function (err, stats) {
    if(err) {
      return console.log(err);
    }
    console.log(module.hot);

    console.log('Listening at ' + ip + ':' + port);
  });
