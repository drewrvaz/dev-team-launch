const { Schema, model } = require('mongoose');

const inviteSchema = new Schema({
  id: ID,
});

  
  const Invite = model('invite', inviteSchema);
  
  module.exports = Invite;