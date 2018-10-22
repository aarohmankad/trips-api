var mongoose = require('mongoose');

/**
 * Trip model
 * @type {Schema}
 */
var Trip = new mongoose.Schema({
  createdDate: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  location: {
    type: String,
    required: true,
  },
  startDate: Date,
  endDate: Date,
  image: String,
  attractions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attraction' }],
});

// Allow us to export model to other files (e.x. routes)
module.exports = mongoose.model('Trip', Trip);
