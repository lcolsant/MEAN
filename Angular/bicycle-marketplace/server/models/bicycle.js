const mongoose = require('mongoose');
const { Schema } = mongoose;

const bicycleSchema = new Schema({

  title:{
    type: String,
    required: [true, 'You must provide a title'],
    trim: true,
  },

  description:{
    type: String,
    trim: true,
  },

  price:{
    type: String,
    required: [true, 'You must provide a price'],
    trim: true,
  },

  location:{
    type: String,
    required: [true, 'You must provide a location'],
    trim: true,
  },

  img:{
    type: String,
    required: true,
    trim: true,
  },

  owner_id:{
    type: String,
  },


},
{
  timestamps: true,
});

module.exports = mongoose.model('Bicycle', bicycleSchema);
