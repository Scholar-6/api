'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userActivateUserIdPUT = function userActivateUserIdPUT (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  User.userActivateUserIdPUT(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userCurrentGET = function userCurrentGET (req, res, next) {
  User.userCurrentGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userDeactivateUserIdPUT = function userDeactivateUserIdPUT (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  User.userDeactivateUserIdPUT(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userDeleteUserIdDELETE = function userDeleteUserIdDELETE (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  User.userDeleteUserIdDELETE(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userPUT = function userPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.userPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userTutorialShowedPUT = function userTutorialShowedPUT (req, res, next) {
  User.userTutorialShowedPUT()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.usersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.useruserIdGET = function useruserIdGET (req, res, next) {
  User.useruserIdGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
