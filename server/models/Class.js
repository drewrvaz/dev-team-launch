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
  classSize: {
    type: Number,
    required: true,
  },
  teamSize: {
    type: Number,
  },
  
});

  
  const Class = model('Class', classSchema);
  
  module.exports = Class;