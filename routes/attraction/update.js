const jwt = require('jsonwebtoken'),
  JSONWEBTOKEN = require('../../config/JSONWEBTOKEN'),
  const mongoose = require('mongoose'),
  Attraction = require('../../models/Attraction');

module.exports = function(router) {
    router.patch('/attraction/:attractionId', (req, res, next) => {
        const id = req.params.attractionId;
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value;
        }
        Attraction.updateOne({ _id: id }, { $set: updateOps })
            .exec()
            .then(result => {
                res.send({ token: jwt.sign({ result }, JSONWEBTOKEN.secret) });
            })
            .catch(err => {
                res.send(err);
            });
    });
};