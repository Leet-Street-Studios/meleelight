var express = require('express');
var app = express();
app.use(express.static('./dist'));

app.get('/', function(req, res) {
  res.redirect('/meleelight.html');
});

app.set('port', (${APPPORT} || 5000));

const appServer = app.listen((${APPPORT} || 5000));




const DeepstreamServer = require('deepstream.io')
const C = DeepstreamServer.constants;
/*
 The server can take
 1) a configuration file path
 2) null to explicitly use defaults to be overriden by server.set()
 3) left empty to load the base configuration from the config file located within the conf directory.
 4) pass some options, missing options will be merged with the base configuration
 */
const server = new DeepstreamServer({
  host: 'localhost',
  port: ${DEEPPORT}
});
server.set('logLevel', 'ERROR');

/*
 Optionally you can specify settings to set in complex objects, such as dataTransforms, a HTTPServer
 or a plugin which you want to reuse within your application
 */
// server.set('dataTransforms', [{
//   topic: C.TOPIC.RPC,
//   action: C.ACTIONS.REQUEST,
//   transform: function(data, metaData) {}
// }])

// start the server
server.start();
