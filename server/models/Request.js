const { Schema, model } = require('mongoose');

const requestSchema = new Schema({
  issue: {
    type: String,
    required: true,
  },
  userId: {
      type: String,
      required: true,
  },

  classId: {
      type: String,
      required: true,
  },
  
});

  
  const Request = model('Request', requestSchema);
  
  module.exports = Request;