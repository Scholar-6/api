'use strict';

var utils = require('../utils/writer.js');
var Tools = require('../service/ToolsService');

module.exports.getVersion = function getVersion (req, res, next) {
  Tools.getVersion()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
