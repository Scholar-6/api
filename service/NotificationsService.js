'use strict';


/**
 * Deletes all notifications for the current user.
 * 
 *
 * no response value expected for this operation
 **/
exports.deleteAllNotifications = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets all notifications for the current user.
 * 
 *
 * returns ArrayOfNotifications
 **/
exports.getAllNotifications = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets all unread notifications for the current user.
 * 
 *
 * returns ArrayOfNotifications
 **/
exports.getUnreadNotifications = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Marks a single notification as read.
 * 
 *
 * notificationId Integer 
 * no response value expected for this operation
 **/
exports.markNotificationAsRead = function(notificationId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Marks all unread notifications as read.
 * 
 *
 * no response value expected for this operation
 **/
exports.markUnreadAsRead = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Send a notification to a user.
 * 
 *
 * body NotifyRequest Notification data to be sent.
 * returns Notification
 **/
exports.sendNotification = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "sender" : {
    "id" : 1,
    "email" : "test1@example.com",
    "firstName" : "Test",
    "lastName" : "User",
    "subjects" : [ "" ],
    "tutorialPassed" : false,
    "status" : 1
  },
  "receiver" : {
    "id" : 2,
    "email" : "test2@example.com",
    "firstName" : "Another",
    "lastName" : "Test",
    "subjects" : [ "" ],
    "tutorialPassed" : false,
    "status" : 1
  },
  "title" : "Notification Title",
  "text" : "This is the text of the notification and it can go on for a while...",
  "read" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

