const jwt = require('jsonwebtoken'),
  JSONWEBTOKEN = require('../../config/JSONWEBTOKEN'),
  const mongoose = require('mongoose'),
  Trip = require('./../../models/Trip');

module.exports = router => {
  // A POST request to /api/trips will
  // create a trip based on request body
  router.post('/trip', (req, res) => {
    Trip.create(req.body, (err, trip) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send({ token: jwt.sign({ trip }, JSONWEBTOKEN.secret) });
    });
  });
};
