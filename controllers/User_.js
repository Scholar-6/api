'use strict';

var utils = require('../utils/writer.js');
var User_ = require('../service/User_Service');

module.exports.addSubject = function addSubject (req, res, next) {
  var subjectId = req.swagger.params['subjectId'].value;
  User_.addSubject(subjectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
