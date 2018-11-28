const jwt = require('jsonwebtoken'),
  { secret } = require('../../config/JSONWEBTOKEN'),
  mongoose = require('mongoose'),
  Trip = require('../../models/Trip');

module.exports = function(router) {
  router.put('/trips/:tripId', (req, res, next) => {
    const _id = req.params.tripId;
    Trip.updateOne(
      { _id },
      {
        $push: {
          attractions: req.query.attraction,
        },
      }
    )
      .then(trip => {
        return res.send(true);
      })
      .catch(err => {
        res.send(err);
      });
  });
};
