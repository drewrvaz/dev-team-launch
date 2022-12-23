const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    validate : {
      validator : Number.isInteger,
      message   : '{VALUE} is not an integer value'
    }
  },
  userId: {
      type: String,
      required: true,
  },
  teamId: {
      type: String,
      required: true,
  },
});

  
  const Feedback = model('Feedback', feedbackSchema);
  
  module.exports = Feedback;