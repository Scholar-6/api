'use strict';

var utils = require('../utils/writer.js');
var File = require('../service/FileService');

module.exports.fileUploadPOST = function fileUploadPOST (req, res, next) {
  var file = req.swagger.params['file'].value;
  File.fileUploadPOST(file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
