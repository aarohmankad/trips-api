const jwt = require('express-jwt'),
  { secret } = require('../../config/JSONWEBTOKEN'),
  mongoose = require('mongoose'),
  Trip = require('./../../models/Trip');

module.exports = router => {
  router.get('/trips', jwt({ secret }), (req, res) => {
    Trip.find({ createdBy: req.user.user._id })
      .populate('attractions')
      .then(trips => res.send(trips))
      .catch(error => res.status(500).send(err));
  });
};
