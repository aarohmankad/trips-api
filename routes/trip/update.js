const jwt = require('jsonwebtoken'),
  JSONWEBTOKEN = require('../../config/JSONWEBTOKEN'),
  const mongoose = require('mongoose'),
  Trip = require('../../models/Trip');

module.exports = function(router) {
    router.patch('/trip/:tripId', (req, res, next) => {
        const id = req.params.tripId;
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value;
        }
        Trip.updateOne({ _id: id }, { $set: updateOps })
            .exec()
            .then(result => {
                res.send({ token: jwt.sign({ result }, JSONWEBTOKEN.secret) });
            })
            .catch(err => {
                res.send(err);
            });
    });
};