const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  user: {
      type: String,
      required: true,
  },
  team: {
      type: String,
      required: true,
  },
});

  
  const Feedback = model('Feedback', feedbackSchema);
  
  module.exports = Feedback;