var mongoose = require('mongoose');
var Schema = mongoose.Schema;

eventSchema = new Schema( {
	eventType: String,
	venue: String
})

Event = mongoose.model('Updatevent', eventSchema);

module.exports = Event;