const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/**
 * User model
 * @type {Schema}
 */
const User = new mongoose.Schema({
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

User.pre('save', function(next) {
  let user = this;

  if (!user.isModified('password')) {
    return next();
  }

  user.password = bcrypt.hashSync(user.password, 12);
  next();
});

User.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

// Allow us to export model to other files (e.x. routes)
module.exports = mongoose.model('User', User);
