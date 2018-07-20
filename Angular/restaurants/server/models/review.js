const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({

  customer:{
    type: String,
    required: [true, 'You must provide a customer name'],
    minlength: [3, 'Reviewer name must be at least 3 characters'],
    trim: true,
  },

  rating:{
    type: Number,
    trim: true,
    min: [1, 'Reviews must be between 1-5 stars'],
    max: [5, 'Reviews must be between 1-5 stars'],
  },

  review:{
    type: String,
    required: [true, 'You must provide a review'],
    minlength: [3, 'Reviews must be at least 3 characters'],
    trim: true,
  },

  _restaurantID:{
    type: String,
    required: [true, 'You must provide a restaurant ID']
  },

},
{
  timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);
