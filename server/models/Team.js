const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
    name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  class: {
    type: String,
    required: true,
  },
  teamMates: [
    {
    type: String,
    required: true,
    }
  ],
  
});

  
  const Team = model('Team', teamSchema);
  
  module.exports = Team;