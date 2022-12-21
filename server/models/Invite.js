const { Schema, model } = require('mongoose');

const inviteSchema = new Schema({
  accept: {
    type: Boolean,
    required: true,
    default: false,
  }
});

  
  const Invite = model('invite', inviteSchema);
  
  module.exports = Invite;