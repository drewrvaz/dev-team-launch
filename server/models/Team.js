const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
    id: ID,
    name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  class: {
    ID: ID,
    type: String,
  },
  teamMates: {
    ID: (user_id),
    type: String,
  },
  
});

  
  const Team = model('Team', teamSchema);
  
  module.exports = Team;