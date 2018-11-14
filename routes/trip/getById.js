//TODO: Used for testing purposes ONLY
const jwt = require('jsonwebtoken'),
  JSONWEBTOKEN = require('../../config/JSONWEBTOKEN'),
  const mongoose = require('mongoose'),
  Trip = require('../../models/Trip');

//Retrieves user by id
module.exports = function(router){
    router.get('/trip/:tripId', (req, res, next) => {
        const id = req.params.tripId;
        Trip.findById(id)
        .exec()
        .then(doc => {
            res.send({ token: jwt.sign({ doc }, JSONWEBTOKEN.secret) });
        })
        .catch(err => {
            res.send(err);
        });
    });
};