var nodemon = require('nodemon');
var path = require('path');

var isDevelopment = process.env.NODE_ENV !== 'production';

if (isDevelopment) {
  var bundler = require('./bundler.js');
  bundler();
}

nodemon({
  execMap: {
    js: 'node'
  },
  script: path.join(__dirname, 'backend/server'),
  ignore: [],
  watch: isDevelopment ? ['backend/*'] : false,
  ext: 'js'
}).on('restart', function() {
  console.log('Backend restarted!');
});
