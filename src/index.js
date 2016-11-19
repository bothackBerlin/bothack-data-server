var express = require('express');

var telefonica = require('bothack-telefonica-data-server/src');
var ingdiba = require('bothack-ing-diba-data-server/src');

function buildServer() {
  const app = express();

  var secrets = require('../assets/secret.json');
  app.get('/secret', function(req, res) { res.send(JSON.stringify(secrets)); });
  app.get('/secrets', function(req, res) { res.send(JSON.stringify(secrets)); });

  var telefonicaApp = telefonica.buildServer();
  var ingdibaApp = ingdiba.buildServer();
  app.use('/telefonica', telefonicaApp);
  app.use('/ingdiba', ingdibaApp);

  return app;
}

module.exports = { buildServer };
