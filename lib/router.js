'use strict';

module.exports = function(req, res) {
  switch(req.method){
    case 'POST':
      require("./post.js")(req, res);
      break;
  }
  switch(req.method){
    case 'PUT':
      require("./put.js")(req, res);
      break;
  }
  switch(req.method){
    case 'GET':
      require("./get.js")(req, res);
      break;
  }
  switch(req.method){
    case 'PATCH':
      require("./patch.js")(req, res);
      break;
  }
  switch(req.method){
    case 'DELETE':
      require("./delete.js")(req, res);
      break;
  }
}