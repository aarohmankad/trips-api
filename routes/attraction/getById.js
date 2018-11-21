//TODO: Used for testing purposes ONLY
const jwt = require('jsonwebtoken'),
  JSONWEBTOKEN = require('../../config/JSONWEBTOKEN'),
  const mongoose = require('mongoose'),
  Attraction = require('../../models/Attraction');

//Retrieves user by id
module.exports = function(router){
    router.get('/attraction/:attractionId', (req, res, next) => {
        const id = req.params.attractionId;
        Attraction.findById(id)
        .exec()
        .then(doc => {
            res.send({ token: jwt.sign({ doc }, JSONWEBTOKEN.secret) });
        })
        .catch(err => {
            res.send(err);
        });
    });
};