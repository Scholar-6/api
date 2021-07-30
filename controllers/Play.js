'use strict';

var utils = require('../utils/writer.js');
var Play = require('../service/PlayService');

module.exports.playAttemptPOST = function playAttemptPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Play.playAttemptPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playAttemptPUT = function playAttemptPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  Play.playAttemptPUT(body)
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

module.exports.playBrickSummarybrickIdGET = function playBrickSummarybrickIdGET (req, res, next) {
  Play.playBrickSummarybrickIdGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reindexPOST = function reindexPOST (req, res, next) {
  Play.reindexPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
