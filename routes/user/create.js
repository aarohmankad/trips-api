const mongoose = require('mongoose'),
  User = require('./../../models/User');

module.exports = router => {
  // A POST request to /api/users will
  // create a user based on request body
  router.post('/users', (req, res) => {
    User.create(req.body, (err, user) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(user);
    });
  });
};
