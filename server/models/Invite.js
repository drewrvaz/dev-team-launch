const { Schema, model } = require('mongoose');

const inviteSchema = new Schema({
  accept: {
    type: Boolean,
    required: true,
    default: false,
  },
  userId: {
    type: String,
    required: true,
  },
  classId: {
    type: String,
    required: true,
  }
});

  
  const Invite = model('invite', inviteSchema);
  
  module.exports = Invite;