'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.brickPOST = function brickPOST (req, res, next) {
  Default.brickPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brickattemptidGET = function brickattemptidGET (req, res, next) {
  Default.brickattemptidGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brickidGET = function brickidGET (req, res, next) {
  Default.brickidGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
