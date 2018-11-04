var jwt = require('express-jwt'),
  { secret } = require('../../config/JSONWEBTOKEN'),
  mongoose = require('mongoose'),
  User = require('./../../models/User');

module.exports = function(router) {
  // A POST request to /api/users will
  // create a user based on request body
  router.get('/users/me', jwt({ secret }), function(req, res) {
    return res.send(req.user);
  });
};
