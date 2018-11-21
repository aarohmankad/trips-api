const jwt = require('jsonwebtoken'),
  JSONWEBTOKEN = require('../../config/JSONWEBTOKEN'),
  const mongoose = require('mongoose'),
  User = require('../../models/Trip');

module.exports = function(router) {
    router.put('/users/:userId', (req, res, next) => {
        const id = req.params.userId;
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.friendProp] = ops.newFriend;
        }
        Trip.updateOne({ _id: id }, { $push: updateOps })
            .exec()
            .then(result => {
                res.send({ token: jwt.sign({ result }, JSONWEBTOKEN.secret) });
            })
            .catch(err => {
                res.send(err);
            });
    });
};