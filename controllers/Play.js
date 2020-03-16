'use strict';

var utils = require('../utils/writer.js');
var Play = require('../service/PlayService');

module.exports.playAttemptPOST = function playAttemptPOST (req, res, next) {
  Play.playAttemptPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playAttemptPUT = function playAttemptPUT (req, res, next) {
  Play.playAttemptPUT()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playAttemptsGET = function playAttemptsGET (req, res, next) {
  Play.playAttemptsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
