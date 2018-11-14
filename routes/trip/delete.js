const jwt = require('jsonwebtoken'),
  JSONWEBTOKEN = require('../../config/JSONWEBTOKEN'),
  const mongoose = require('mongoose'),
  Trip = require('../../models/Trip');

//Delete user by id
module.exports = function(router) {
    router.delete('/trip/:tripId', (req, res, next) => {
        const id = req.params.tripId;
        Trip.deleteOne({ _id: id })
            .exec()
            .then(result => {
                res.send({ token: jwt.sign({ result }, JSONWEBTOKEN.secret) });
            })
            .catch(err => {
                res.status(err);
            });
    });
};
