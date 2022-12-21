const { Schema, model } = require('mongoose');

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  lead: {
    ID: (user_id),
    type: String,
  },
  members: {
    ID: (user_id),
    type: String,
  },
  teams: {
    ID: (user_id),
  },
  invites: {
    ID: (invites_id)
  },
  avatar: {
    ID: (classAvatar_id)
  },
  
});

  
  const Class = model('Class', classSchema);
  
  module.exports = Class;