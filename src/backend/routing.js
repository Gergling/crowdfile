var express = require('express');
var apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
  res.json({
    errors: false,
    message: 'You have reached the base of the crowdfile api... FUCK OFF :)',
    status: 200
  });
});

module.exports = apiRouter;
