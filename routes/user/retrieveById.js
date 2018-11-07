const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Database Mongoose Model
User = require('../../models/user');

//Retrives user by id
module.exports = function(router){
    router.get('/users/:userId', (req, res, next) => {
        const id = req.params.userId;
        User.findById(id)
        .exec()
        .then(doc => {
            res.send(doc);
        })
        .catch(err => {
            res.send(err);
        });
    });
};