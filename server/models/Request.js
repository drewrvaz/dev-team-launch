const { Schema, model } = require('mongoose');

const requestSchema = new Schema({
  issue: {
    type: String,
    required: true,
  },
  requestor: {
      type: String,
      required: true,
  },

  class: {
      type: String,
      required: true,
  },
  
});

  
  const Request = model('Request', requestSchema);
  
  module.exports = Request;