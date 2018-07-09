
const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({

  name:{
    type: String,
    required: [true, 'You must provide a name'],
    trim: true,
  },

  position:{
    type: String,
    trim: true,
  },

  statusGameOne:{
    type: String,
    trim: true,
    default:"playing",
  },

  statusGameTwo:{
    type: String,
    trim: true,
    default:"playing",
  },

  statusGameThree:{
    type: String,
    trim: true,
    default:"playing",
  },

},
{
  timestamps: true,
});

module.exports = mongoose.model('Player', playerSchema);
