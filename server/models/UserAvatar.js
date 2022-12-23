const { Schema, model } = require('mongoose');

const userAvatarSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
      type: String,
      required: true,
  },
});

  
  const UserAvatar = model('UserAvatar', userAvatarSchema);
  
  module.exports = UserAvatar;