const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({

  note:{
    type: String,
    required: [true, 'You must provide a note'],
    trim: true,
  },


},
{
  timestamps: true,
});

module.exports = mongoose.model('Note', noteSchema);
