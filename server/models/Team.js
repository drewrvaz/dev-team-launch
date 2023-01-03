const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  classId: {
    type: String,
    required: true,
  },
  userIds: [{
    type: String,
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

  
  const Team = model('Team', teamSchema);
  
  module.exports = Team;