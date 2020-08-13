'use strict';

var utils = require('../utils/writer.js');
var Comment = require('../service/CommentService');

module.exports.brickBrickIdCommentCommentIdGET = function brickBrickIdCommentCommentIdGET (req, res, next) {
  var brickId = req.swagger.params['brickId'].value;
  var commentId = req.swagger.params['commentId'].value;
  Comment.brickBrickIdCommentCommentIdGET(brickId,commentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bricksCommentPOST = function bricksCommentPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Comment.bricksCommentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bricksCommentsBrickIdGET = function bricksCommentsBrickIdGET (req, res, next) {
  var brickId = req.swagger.params['brickId'].value;
  Comment.bricksCommentsBrickIdGET(brickId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
