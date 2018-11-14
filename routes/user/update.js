const jwt = require('jsonwebtoken'),
  JSONWEBTOKEN = require('../../config/JSONWEBTOKEN'),
  const mongoose = require('mongoose'),
  User = require('./../../models/User');

module.exports = function(router) {
    router.patch('/users/:userId', (req, res, next) => {
        const id = req.params.userId;
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value;
        }
        User.updateOne({ _id: id }, { $set: updateOps })
            .exec()
            .then(result => {
                res.send({ token: jwt.sign({ result }, JSONWEBTOKEN.secret) });
            })
            .catch(err => {
                res.send(err);
            });
    });
};
