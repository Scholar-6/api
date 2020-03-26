'use strict';

var utils = require('../utils/writer.js');
var Subject = require('../service/SubjectService');

module.exports.subjectsGET = function subjectsGET (req, res, next) {
  Subject.subjectsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
