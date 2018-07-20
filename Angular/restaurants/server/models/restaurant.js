const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema({

  name:{
    type: String,
    required: [true, 'You must provide a restaurant name'],
    minlength: [3, 'Restaurant name must be at least 3 characters'],
    trim: true,
  },

  cuisine:{
    type: String,
    required: [true, 'You must provide a cuisine'],
    minlength: [3, 'Cuisine must be at least 3 characters'],
    trim: true,
  },

},
{
  timestamps: true,
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
