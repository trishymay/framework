'use strict';

var fs = require('fs');
var url = require('url');

module.exports = function(req, res) {
  var urlpieces = req.url.split('/');
  var id = urlpieces[urlpieces.length-1];
  var filename = id + ".json";
  var fullPath = './data/' + filename;

  fs.unlink(fullPath, function(err) {
    res.writeHead(err ? 404 : 200, {'Content-Type': 'text/plain'});
    res.end("delete successful");
  });
}