const jwt = require('jsonwebtoken'),
  JSONWEBTOKEN = require('../../config/JSONWEBTOKEN'),
  mongoose = require('mongoose'),
  User = require('./../../models/User');

module.exports = router => {
  // A POST request to /api/login will
  // attempt to log in a user based on
  // request body
  router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) {
          return res.status(500).send(err);
        }

        if (isMatch) {
          return res.send({
            isMatch,
            token: jwt.sign({ user }, JSONWEBTOKEN.secret),
          });
        }
      });
    });
  });
};
