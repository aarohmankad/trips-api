const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Database Mongoose Model
User = require('../../models/user');

//Delete user by id
module.exports = function(router){
    router.delete('/users/:userId', (req, res, next) => {
        const id = req.params.userId;
        User.deleteOne({_id: id})
        .exec()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(err);
        });
    });
};