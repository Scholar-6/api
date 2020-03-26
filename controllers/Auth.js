'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.authGoogleLoginReturnUrlGET = function authGoogleLoginReturnUrlGET (req, res, next) {
  var returnUrl = req.swagger.params['returnUrl'].value;
  Auth.authGoogleLoginReturnUrlGET(returnUrl)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authLoginPOST = function authLoginPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Auth.authLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authLoginuserTypePOST = function authLoginuserTypePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Auth.authLoginuserTypePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authLogoutPOST = function authLogoutPOST (req, res, next) {
  Auth.authLogoutPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authSignUpPOST = function authSignUpPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Auth.authSignUpPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
