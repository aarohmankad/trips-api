const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/User');

//Retrives user by username
module.exports = function(router) {
    router.get('/users/:username', (req, res, next) => {
        const username = req.params.username;
        User.findOne({ username })
            .exec()
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                res.send(err);
            });
    });
};
