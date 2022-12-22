const { Schema, model } = require('mongoose');

const classAvatarSchema = new Schema({
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

  
  const ClassAvatar = model('ClassAvatar', classAvatarSchema);
  
  module.exports = ClassAvatar;