const { Schema, model } = require('mongoose');

const teamAvatarSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
      type: String,
      required: true,
  },
});

  
  const TeamAvatar = model('TeamAvatar', teamAvatarSchema);
  
  module.exports = TeamAvatar;