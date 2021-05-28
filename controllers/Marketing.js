'use strict';

var utils = require('../utils/writer.js');
var Marketing = require('../service/MarketingService');

module.exports.addEmailToMailchimp = function addEmailToMailchimp (req, res, next) {
  var email = req.swagger.params['email'].value;
  var tags = req.swagger.params['tags'].value;
  Marketing.addEmailToMailchimp(email,tags)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
