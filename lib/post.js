'use strict';

var fs = require('fs');
var url = require('url');

module.exports = function(req, res) {
  var urlpieces = req.url.split('/');
  var id = urlpieces[urlpieces.length-1];
  var filename = id + ".json";
  var fullPath = './data/' + filename;
  var input;

  req.on('data', function(data) {
    input = data.toString('utf-8');
    console.log(data);
  });

  req.on('end', function() {
    fs.open(fullPath, 'wx', function(err) {
      if(err) {
        console.log('file already exists');
        res.writeHead(404);
        res.end();
      } else {
        fs.writeFile(fullPath, input, function(err) {
          res.writeHead(err ? 404 : 200, {'Content-Type': 'application/json'});
          res.write(input);
          console.log("file created");
          res.end();
        });
      }
    });
  });
}