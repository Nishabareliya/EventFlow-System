var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  eventTypes: String,
  description: String,
  images: String,  // Use String type for file paths or references to images
});

var galleries = mongoose.model('galleries', userSchema);
module.exports = galleries;
