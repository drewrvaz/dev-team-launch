const { Schema, model } = require('mongoose');

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  lead: {
    type: String,
    required: true,
  },
  members: [
    {
    type: String,
    }
  ],
  teams: {
    type: String,
  },
  invites: [
    {
    type: String,
    }
  ],
  avatar: {
    type: String,
  },
  
});

  
  const Class = model('Class', classSchema);
  
  module.exports = Class;