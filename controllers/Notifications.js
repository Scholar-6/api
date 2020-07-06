'use strict';

var utils = require('../utils/writer.js');
var Notifications = require('../service/NotificationsService');

module.exports.deleteAllNotifications = function deleteAllNotifications (req, res, next) {
  Notifications.deleteAllNotifications()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllNotifications = function getAllNotifications (req, res, next) {
  Notifications.getAllNotifications()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUnreadNotifications = function getUnreadNotifications (req, res, next) {
  Notifications.getUnreadNotifications()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.markNotificationAsRead = function markNotificationAsRead (req, res, next) {
  var notificationId = req.swagger.params['notificationId'].value;
  Notifications.markNotificationAsRead(notificationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.markUnreadAsRead = function markUnreadAsRead (req, res, next) {
  Notifications.markUnreadAsRead()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendNotification = function sendNotification (req, res, next) {
  var body = req.swagger.params['body'].value;
  Notifications.sendNotification(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
