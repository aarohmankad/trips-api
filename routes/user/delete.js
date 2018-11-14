const jwt = require('jsonwebtoken'),
  JSONWEBTOKEN = require('../../config/JSONWEBTOKEN'),
  const mongoose = require('mongoose'),
  User = require('./../../models/User');

//Delete user by id
module.exports = function(router) {
    router.delete('/users/:userId', (req, res, next) => {
        const id = req.params.userId;
        User.deleteOne({ _id: id })
            .exec()
            .then(result => {
                res.send({ token: jwt.sign({ result }, JSONWEBTOKEN.secret) });
            })
            .catch(err => {
                res.status(err);
            });
    });
};
