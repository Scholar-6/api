'use strict';

var utils = require('../utils/writer.js');
var Stripe = require('../service/StripeService');

module.exports.stripesuccessGET = function stripesuccessGET (req, res, next) {
  var code = req.swagger.params['code'].value;
  Stripe.stripesuccessGET(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
