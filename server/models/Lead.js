const { Schema, model } = require('mongoose');

const leadSchema = new Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
      password: {
        type: String,
        required: true,
        minlength: 12,
      },
      skills: [{
        type: String,
      }],
      availability: {
        type: String,
      },
      experience: {
        type: String,
      },
      userAvatarId: {
        type: String,
      },
      inviteIds: [{
        type: String,
      }],
    classes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Class'
      }
    ]
  }
);

const Lead = model('Lead', leadSchema);

module.exports = Lead;