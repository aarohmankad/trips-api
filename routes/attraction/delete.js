const jwt = require('jsonwebtoken'),
  JSONWEBTOKEN = require('../../config/JSONWEBTOKEN'),
  const mongoose = require('mongoose'),
  Attraction = require('../../models/Attraction');

//Delete user by id
module.exports = function(router) {
    router.delete('/attraction/:attractionId', (req, res, next) => {
        const id = req.params.attractionId;
        Attraction.deleteOne({ _id: id })
            .exec()
            .then(result => {
                res.send({ token: jwt.sign({ result }, JSONWEBTOKEN.secret) });
            })
            .catch(err => {
                res.status(err);
            });
    });
};
