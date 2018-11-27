const jwt = require('express-jwt'),
  { secret } = require('../../config/JSONWEBTOKEN'),
  mongoose = require('mongoose'),
  Trip = require('./../../models/Trip');

module.exports = router => {
  // A POST request to /api/trips will
  // create a trip based on request body
  router.post('/trips', jwt({ secret }), (req, res) => {
    Trip.create({ ...req.body, createdBy: req.user.user._id }, (err, trip) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(trip);
    });
  });
};
