'use strict';

var utils = require('../utils/writer.js');
var Keywords = require('../service/KeywordsService');

module.exports.keywordsSuggest = function keywordsSuggest (req, res, next) {
  var suggestion = req.swagger.params['suggestion'].value;
  Keywords.keywordsSuggest(suggestion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
