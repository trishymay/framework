'use strict';

var fs = require('fs');
var url = require('url');

module.exports = function(req, res) {
  var urlpieces = req.url.split('/');
  var id = urlpieces[urlpieces.length-1];
  var filename = id + ".json";
  var fullPath = './data/' + filename;

  fs.readFile(fullPath, function(err, data) {
    if(err) {
      res.writeHead(404);
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(data);
      res.end();
    }
  });
};