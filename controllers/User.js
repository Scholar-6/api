'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userTutorialShowedPUT = function userTutorialShowedPUT (req, res, next) {
  User.userTutorialShowedPUT()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
