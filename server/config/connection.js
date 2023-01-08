const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://mongo:c1brL9G7CtbJQAiw@cluster0.xu7enbg.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
