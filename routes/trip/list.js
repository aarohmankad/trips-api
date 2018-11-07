const mongoose = require('mongoose'),
  Trip = require('./../../models/Trip');

module.exports = router => {
  router.get('/trips', (req, res) => {
    Trip.find(
      {
        createdBy: req.user.user._id,
      },
      (err, trips) => {
        if (err) {
          return res.status(500).send(err);
        }

        return res.send(trips);
      }
    );
  });
};
