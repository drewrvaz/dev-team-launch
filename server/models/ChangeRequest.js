const { Schema, model } = require('mongoose');

const requestSchema = new Schema({
  issue: {
    type: String,
    required: true,
  },
  users: [
    {
      type: String,
    },
  ],
  classes: [
    {
      type: String,
    },
  ],
});

  
  const Request = model('Request', requestSchema);
  
  module.exports = Request;