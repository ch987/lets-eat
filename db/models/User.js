const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  id: String,
  password: String,
  recipes: [String],
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;
