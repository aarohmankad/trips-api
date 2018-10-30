const mongoose = require('mongoose'),
  Attraction = require('./../../models/Attraction');

module.exports = router => {
  // A POST request to /api/attractions will
  // create a attraction based on request body
  router.post('/attractions', (req, res) => {
    Attraction.create(req.body, (err, attraction) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(attraction);
    });
  });
};
