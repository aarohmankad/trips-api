const mongoose = require('mongoose'),
    //Database Mongoose Model
    User = require('../../models/User');

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
                res.send(result);
            })
            .catch(err => {
                res.send(result);
            });
    });
};
