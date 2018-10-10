var
  mongoose = require('mongoose'),
  User = require('./../../models/User');

module.exports = function(router) {
  // A POST request to /api/users will 
  // create a user based on request body
  router.post('/users', function (req, res) {
    User.create(req.body, function (err, user) {
      if (err) {
        return res.send(err);
      }

      return res.send(user);
    });
  });
};