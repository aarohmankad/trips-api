var mongoose = require('mongoose');

/**
 * User model
 * @type {Schema}
 */
var User = new mongoose.Schema({
  createdDate: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Allow us to export model to other files (e.x. routes)
module.exports = mongoose.model('User', User);
