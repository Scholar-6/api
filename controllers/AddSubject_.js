'use strict';

var utils = require('../utils/writer.js');
var AddSubject_ = require('../service/AddSubject_Service');

module.exports.addSubject = function addSubject (req, res, next) {
  var subjectId = req.swagger.params['subjectId'].value;
  AddSubject_.addSubject(subjectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
