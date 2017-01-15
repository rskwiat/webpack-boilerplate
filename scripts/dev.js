process.env.NODE_ENV = 'dev';

const port = 4444;
const connect = require('connect');
const serveStatic = require('serve-static')
const http = require('http');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config/webpack.config');

const compiler = webpack(config);
const app = connect();

compiler.watch({
    aggregateTimeout: 300,
    poll: true
}, (err, stats) => {
  compiler.run((err, stats) => {
    console.log(chalk.green('Compiling'));
    if (err) {
      console.log(chalk.red(err));
    } else {
      const assets = stats.toJson().assets;
      assets.forEach((entry) => {
        console.log(chalk.green('Config saved!'));
        console.log(chalk.yellow('File Name: ') + entry.name);
      });
    }
  });
});

app.use(serveStatic("./public"));
app.listen(port, () => {
  console.log(`Application is running on http://localhost:${port}`);
});
