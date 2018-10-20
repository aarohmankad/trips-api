var mongoose = require('mongoose'),
  Trip = require('./../../models/Trip');

module.exports = function(router) {
  // A POST request to /api/trips will
  // create a trip based on request body
  router.post('/trips', function(req, res) {
    Trip.create(req.body, function(err, trip) {
      if (err) {
        return res.send(err);
      }

      return res.send(trip);
    });
  });
};
