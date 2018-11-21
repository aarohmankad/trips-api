//TODO: Used for testing purposes ONLY.
const jwt = require('jsonwebtoken'),
  JSONWEBTOKEN = require('../../config/JSONWEBTOKEN'),
  const mongoose = require('mongoose'),
  User = require('./../../models/User');

//Retrieves all users in database. 
//USED FOR TESTING ONLY
module.exports = function(router){
    router.get('/users', (req, res, next) => {
        User.find()
        .exec()
        .then(docs => {
            res.send({ token: jwt.sign({ docs }, JSONWEBTOKEN.secret) });
        })
        .catch(err => {
            res.send(err);
        });
    });
};