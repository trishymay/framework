var http = require('http');
var router = require('./lib/router');
var resources = [];
var routes = {};

module.exports = {
  addResource: function (name) {
    resources.push(name);
    for(var i = 0; i < resources.length; i++) {
      routes[resources[i]] = router;
    }
  },
  startServer: function() {

    var server = http.createServer(function(req, res) {
      var pathBits = req.url.split("/");

      if (typeof(routes[pathBits[1]]) === 'function') {
        routes[pathBits[1]](req, res);
      } else {
        res.writeHead(404, {
          'Content-Type': 'application/json'
        });
      res.write(JSON.stringify({msg: 'route not found' }));

      res.end();
      }

    });
    server.listen(3000, function() {
      console.log('server listening');
    });
  }
}