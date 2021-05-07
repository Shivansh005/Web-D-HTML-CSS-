// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harryCart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are connected..");
  console.log("Welcome to the database...");
});