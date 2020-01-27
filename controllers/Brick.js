'use strict';

var utils = require('../utils/writer.js');
var Brick = require('../service/BrickService');

module.exports.addBrick = function addBrick (req, res, next) {
  var body = req.swagger.params['body'].value;
  Brick.addBrick(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brickGET = function brickGET (req, res, next) {
  Brick.brickGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brickIdGET = function brickIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Brick.brickIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBrick = function updateBrick (req, res, next) {
  var body = req.swagger.params['body'].value;
  Brick.updateBrick(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
