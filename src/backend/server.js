var methodOverride = require('method-override');
var errorhandler   = require('errorhandler');
var bodyParser     = require('body-parser');
var express        = require('express');
var logger         = require('morgan');
var path           = require('path');
var httpProxy      = require('http-proxy');
var compress       = require('compression');

// should probably move the below line into a helper but oh well..
var isDevelopment = process.env.NODE_ENV !== 'production';

var proxy = httpProxy.createProxyServer();
var app = express();

var publicPath = path.resolve(__dirname, '..', 'public');

// Setup basic middleware
app.use(compress());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

if (isDevelopment) {
  app.use(errorhandler());

  app.all(['/assets/*', '*.hot-update.json'], function(req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:3001'
    });
  })
}

app.use(express.static(publicPath));

app.get('/api', function(req, res) {
  res.json({
    error: false,
    body: 'you made it :)'
  });
})

// history api routing rewrite... any backend routes must be
// defined above this point! !!!!!! IMPORTANT !!!!!!
app.get('/*', function(req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

proxy.on('error', function(error) {
  console.log('Could not connect to proxy');
});

app.listen(3000, function() {
  console.log('Backend running on port 3000'); // move port to config...
})

// TODO: Enable serving over https
