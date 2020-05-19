'use strict';

var utils = require('../utils/writer.js');
var Question = require('../service/QuestionService');

module.exports.questionIdGET = function questionIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Question.questionIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateQuestion = function updateQuestion (req, res, next) {
  var body = req.swagger.params['body'].value;
  Question.updateQuestion(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
