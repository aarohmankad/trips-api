const mongoose = require('mongoose'),
  User = require('./../../models/User');

module.exports = router => {
  // A POST request to /api/login will
  // attempt to log in a user based on
  // request body
  router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }).then((err, user) => {
      if (err) {
        return res.status(500).send(err);
      }

      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) {
          return res.send(err);
        }

        if (isMatch) {
          res.send('User logged in');
        }
      });
    });
  });
};
