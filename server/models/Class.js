const { Schema, model } = require('mongoose');

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  leadId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  userIds: [{
      type: String,
  }],
  teamIds: [{
      type: String,
  }],
  inviteIds: [{
    type: String,
  }],
  classAvatarId: {
    type: String,
  },
  teamSize: {
    type: Number,
  },
  classSize: {
    type: Number,
  },
  
});

  
  const Class = model('Class', classSchema);
  
  module.exports = Class;