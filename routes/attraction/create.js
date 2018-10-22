var mongoose = require('mongoose'),
  Attraction = require('./../../models/Attraction');

module.exports = function(router) {
  // A POST request to /api/attractions will
  // create a attraction based on request body
  router.post('/attractions', function(req, res) {
    Attraction.create(req.body, function(err, attraction) {
      if (err) {
        return res.send(err);
      }

      return res.send(attraction);
    });
  });
};
