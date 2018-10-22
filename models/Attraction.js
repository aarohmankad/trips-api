var mongoose = require('mongoose');

/**
 * Attraction model
 * @type {Schema}
 */
var Attraction = new mongoose.Schema({
  createdDate: {
    type: Date,
    default: Date.now,
  },
  image: String,
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

// Allow us to export model to other files (e.x. routes)
module.exports = mongoose.model('Attraction', Attraction);
